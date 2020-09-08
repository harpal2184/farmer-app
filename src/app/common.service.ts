import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  taskUrl = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { 
  
  }
  getAllRecord(): Observable<any> {
    return this.http.get(this.taskUrl);
  }

  sendRecord(task) {
    return this.http.post(this.taskUrl, task);
  }
}
