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

    let editRecord = this.service.editRecordDetails;
    if(editRecord){
      this.task = {
        name: editRecord.name,
        date: editRecord.created_date,
        workType: editRecord.workType,
        pay: editRecord.pay,
        description: editRecord.description,
        pay_status:editRecord.pay_status[0],
        transaction_type:editRecord.transaction_type[0]
      }
    }
    else{
      this.task = {
        name: '',
        date: new Date(),
        workType: '',
        pay: '',
        description: '',
        pay_status:'',
        transaction_type: '',
      }
    }
    
  }
  addTask(task){
    if(task){
      console.log(task);
      let d1 = task.date;
      console.log(d1);
      this.service.sendRecord(task).subscribe((res)=> {
       if(res){

         console.log("Record Inserted Successfully for : ", res);
         this.route.navigate(['/']);

        }
      },
      (error) =>{
        console.log("Error in inserting record");
      });
    }
  }
  updateTask(task){
    if(task){
      this.service.updateRecord(task).subscribe((res)=> {
        if(res){
          console.log("Record Inserted Successfully for : ", res);
          this.route.navigate(['/']);
 
         }
       },
       (error) =>{
         console.log("Error in inserting record");
       });
    }
  }
  addRecord(user){
    if(user === 'Tushar'){
      this.addDetails(user,'Tractor Driving', 70, 'Tractor Driving salary 1 vera');
    }
    // else if(user === 'Tractor'){
    //   this.addDetails(user,'Tractor Khed/diesel','','');
    // }
    else{
      this.addDetails(user,'','','');
    }
  }
  addDetails(user, workType, pay, description){
    this.task = {
      name: user,
      date: new Date(),
      workType: workType,
      pay: pay,
      description: description,
      pay_status:'',
      transaction_type:'',
    } 
  }
  goBack(){
    this.service.editRecordDetails = {};
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
      pay_status:'',
      transaction_type:''
    }
  }
}
