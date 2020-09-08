import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {MaterialModule} from './material/material.module';

import { AppComponent } from './app.component';
import { ListRecordComponent } from './list-record/list-record.component';
import { AgGridModule } from 'ag-grid-angular';

import { CommonService } from './common.service';
import { AddWorkDetailComponent } from './add-work-detail/add-work-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ListRecordComponent,
    AddWorkDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
