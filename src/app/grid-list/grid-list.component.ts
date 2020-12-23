import { Component, Input, OnInit } from '@angular/core';
import { ActionCellRendererComponent } from '../action-cell-renderer/action-cell-renderer.component';
import { CommonService } from '../common.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {

  @Input() childData;
  public gridApi;
  public gridColumnApi;
  public rowData;
  public columnsDefs;
  public defaultColDef;
  public defaultColGroupDef;
  public columnTypes;
  public frameworkComponents;
  
  
  constructor(private service: CommonService, private route:Router) { 

  }

  ngOnInit() {

    console.log("@@@@@@@@", this.childData);
    this.frameworkComponents = {
      ActionCellRendererComponent : ActionCellRendererComponent
    };
    this.rowData = this.childData.rowData;
    this.columnsDefs = this.childData.columnsDefs;

    this.defaultColDef = {
      width: 150,
      autoHeight: true,
      resizable: true,
      flex:1,
    };
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    
   
    params.api.sizeColumnsToFit();
  }
  filterRecord(dateData){
    console.log(dateData);
    this.service.filterDateBased(dateData).subscribe((res) => {
      console.log(res);
      this.gridApi.setRowData(res);
    });
  }
  addRecord(){
    this.route.navigate(['addworkdetails']);
  }
}
