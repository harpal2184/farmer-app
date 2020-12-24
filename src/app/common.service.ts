import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

 
  tasksUrl = "/api/tasks";
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { 
  }
  getAllRecord(): Observable<any> {
    return this.http.get(this.tasksUrl);
  }

  sendRecord(task) {
    return this.http.post(this.tasksUrl, task);
  }

  editRecord(id){
    let editUrl = this.tasksUrl + '/' + id;
    return this.http.get(editUrl);
  }

  deleteRecord(id){
    let editUrl = this.tasksUrl + '/' + id;
    return this.http.delete(editUrl);
  }

  updateRecord(task){
    let id = "";
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      id = params.taskId;
      console.log(id);
    });

    console.log(task);
    let editUrl = this.tasksUrl + '/' + id;
    return this.http.put(editUrl, task);
  }

  filterDateBased(dateData: any) {
    console.log(dateData,"api call");
    return this.http.post(this.tasksUrl + "/filterDatewise", dateData);
  }

  data:any;
  set editRecordDetails(data){
    this.data = data;
  }
  get editRecordDetails(){
    return this.data;
  }

  processApiData(data){
    let updatdRowData = [];

    if(data.length > 0) {
      for(let i=0; i< data.length; i++){
        let d = this.dateFunction(data[i].created_date);
        data[i]["fulldate"] = d.fulldate;
        data[i]["month"] = d.month;
        data[i]["year"] = d.year;
        updatdRowData.push(data[i]);
      }
    }
    console.log(updatdRowData);
    return data;
  }
  
  dateFunction(d){
    let dateObj = {
      "fulldate":"",
      "month":"",
      "year": null,
    };
    let cDate = new Date(d);
    let monthNames =["January","February","March","April",
                    "May","June","July","August",
                    "Sepember", "October","November","December"];
  let day = cDate.getDate();
  let monthIndex = cDate.getMonth();
  let monthName = monthNames[monthIndex];
  
  let year = cDate.getFullYear();
   dateObj.fulldate = monthName + '-' + day + '-'+ year;
   dateObj.month = monthName;
   dateObj.year = year;
   return dateObj;
  }
}
