import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-list-record',
  templateUrl: './list-record.component.html',
  styleUrls: ['./list-record.component.css']
})

export class ListRecordComponent implements OnInit {
  allTask:any;

  private gridApi;
  private gridColumnApi;

  private defaultColDef;
  private defaultColGroupDef;
  private columnTypes;
  
  rowHeight = 275;
  columnDefs = [
    {headerName: 'ID', field:'_id', hide:true},
    {headerName: 'Name', field: 'name' },
    {headerName: 'Date', field: 'created_date'},
    {headerName: 'Work Type', field: 'type_of_work' },
    {headerName: 'Pay', field: 'amount'},
    {headerName: 'Description', field: 'description', autoHeight:true},
    {headerName: 'Pay_Status', field: 'pay_status'},
];

  constructor(private service: CommonService, private route:Router) { }

  ngOnInit() {
    this.allTask =  this.service.getAllRecord();
    this.defaultColDef = {
      width: 150,
      autoHeight: true,
      resizable: true,
    };
  }
  addRecord(){
    this.route.navigate(['addworkdetails']);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }
}
