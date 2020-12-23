import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkDetailComponent } from '../add-work-detail/add-work-detail.component';
import { AppComponent } from '../app.component';
import { ListRecordComponent} from '../list-record/list-record.component';
import { WorkersDetailsComponent } from '../workers-details/workers-details.component';
import { CropDetailsComponent } from '../crop-details/crop-details.component';
import { TractorDetailsComponent } from '../tractor-details/tractor-details.component';
const routes: Routes = [
  {
    path: '',
    component: ListRecordComponent
  },
  {    
      path: 'addworkdetails',
      component: AddWorkDetailComponent,
  },
  {
    path: 'worker-details',
    component: WorkersDetailsComponent,
  },
  {
    path: 'crop-details',
    component: CropDetailsComponent
  },
  {
    path: 'tractor-details',
    component: TractorDetailsComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
