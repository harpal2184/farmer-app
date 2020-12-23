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
import 'ag-grid-enterprise';

import { CommonService } from './common.service';
import { AddWorkDetailComponent } from './add-work-detail/add-work-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ActionCellRendererComponent } from './action-cell-renderer/action-cell-renderer.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WorkersDetailsComponent } from './workers-details/workers-details.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';
import { TractorDetailsComponent } from './tractor-details/tractor-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListRecordComponent,
    AddWorkDetailComponent,
    ActionCellRendererComponent,
    GridListComponent,
    HeaderComponent,
    FooterComponent,
    WorkersDetailsComponent,
    CropDetailsComponent,
    TractorDetailsComponent
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
    AgGridModule.withComponents([ActionCellRendererComponent])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
