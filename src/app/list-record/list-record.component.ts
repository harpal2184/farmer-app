import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-list-record',
  templateUrl: './list-record.component.html',
  styleUrls: ['./list-record.component.css']
})
export class ListRecordComponent implements OnInit {
  allTask:any;

  columnDefs = [
    {headerName: 'ID', field:'_id'},
    {headerName: 'Name', field: 'name' },
    {headerName: 'Date', field: 'created_date'},
    {headerName: 'Work Type', field: 'type_of_work' },
    {headerName: 'Pay', field: 'amount'},
    {headerName: 'Description', field: 'description'},
    {headerName: 'Pay_Status', field: 'pay_status'},
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.allTask =  this.service.getAllRecord();
  }

}
