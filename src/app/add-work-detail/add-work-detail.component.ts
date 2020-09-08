import { Component, OnInit} from '@angular/core';
import { Task } from './task.model';
import { CommonService } from '../common.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-add-work-detail',
  templateUrl: './add-work-detail.component.html',
  styleUrls: ['./add-work-detail.component.scss']
})
export class AddWorkDetailComponent implements OnInit {
  task: Task;
  picker: any;
  constructor(private service: CommonService, private route: Router) { }

  ngOnInit() {
    this.task = {
      name: '',
      date: new Date(),
      workType: '',
      pay: '',
      description: '',
      pay_status:''
    }
    
  }
  addTask(task){
    if(task){
      this.service.sendRecord(task).subscribe((res)=> {
       if(res){
         console.log("Record Inserted Successfully for : ", res["name"]);
         this.route.navigate(['/']);

        }
      },
      (error) =>{
        console.log("Error in inserting record");
      });
    }
  }
  goBack(){
    this.clearTask();
    this.route.navigate(['/']);
  }
  clearTask(){
    this.task = {
      name: '',
      date: new Date(),
      workType: '',
      pay: '',
      description: '',
      pay_status:''
    }
  }
}
