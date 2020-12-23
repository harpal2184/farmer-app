import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-action-cell-renderer',
  templateUrl: './action-cell-renderer.component.html',
  styleUrls: ['./action-cell-renderer.component.scss']
})
export class ActionCellRendererComponent implements ICellRendererAngularComp {

  params: any;
  constructor(private service: CommonService, private route:Router) { }
  refresh(params: any): boolean {
    throw new Error("Method not implemented.");
  }
  
  agInit(params) {
    this.params = params;
  }
  editRecord(params){
    console.log(params);
    let id = params.data._id;
    this.service.editRecord(id).subscribe((res)=>{
      if(res){
        console.log(res);
        this.service.editRecordDetails = res;
        this.route.navigate(['addworkdetails'], { queryParams: { taskId: id } });
      }
    },
    (error)=> {
      console.log("error in editing record");
    })
  }
  deleteRecord(params){
    let id = params.data._id;
    this.service.deleteRecord(id).subscribe((res)=>{
      console.log(res,"deleted");
    });
    window.location.reload();
  }
  
  onDestroy(): void {
    throw new Error("Method not implemented.");
  }

 

}
