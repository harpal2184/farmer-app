import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'; 

@Component({
  selector: 'app-tractor-details',
  templateUrl: './tractor-details.component.html',
  styleUrls: ['./tractor-details.component.scss']
})
export class TractorDetailsComponent implements OnInit {

  parentData = {
    columnDefs: [],
    rowData: []
  };
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.parentData["columnDefs"] = this.getColumnDefs();

    let allTask =  this.service.getAllRecord();
    allTask.subscribe(rowData => {
      this.parentData["rowData"] = this.service.processApiData(rowData);
    });
  }
  getColumnDefs() {
    return  [
      {headerName: 'ID', field:'_id', hide:true},
      {headerName: 'Name', field: 'name',sortable: true, filter: true , enableRowGroup:true},
      
      {headerName: 'Day', field: 'created_date', sortable: true, filter: true, cellRenderer : function(params){
       
        let cDate = new Date(params.value);
        let days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
        let dDay = cDate.getDay();
       
        let cDay = dDay - 1;
      
        return days[cDay];
      }},
      {headerName: 'Year', field: 'year', sortable: true, filter: true, 
      enableRowGroup:true, width:90
    },
      {headerName: 'Month', field: 'month', sortable: true, filter: true, 
      enableRowGroup:true, width:110
  },
      {headerName: 'Date', field: 'fulldate', sortable: true, filter: true, 
      enableRowGroup:true,
    },
      {headerName: 'Work Type', field: 'workType' , sortable: true, filter: true},
      {headerName: 'Income', field: 'pay',
      aggFunc: function(params){
        var result = 0;
        params.values.forEach(function (value) {
          let v = Number(value);
          if (v) {
            result += v;
          }
        });
        return result;
      },
          },
          {headerName: 'Expense', field: 'pay',
          aggFunc: function(params){
            var result = 0;
            params.values.forEach(function (value) {
              let v = Number(value);
              if (v) {
                result += v;
              }
            });
            return result;
      },
         },
      {headerName: 'Description', field: 'description', autoHeight:true},
      {headerName: 'Pay_Status', field: 'pay_status',sortable: true, filter: true},
      {headerName: 'Action', cellRenderer:"ActionCellRendererComponent" , pinned:"left",
      width:100
      }
  ];
  }

}
