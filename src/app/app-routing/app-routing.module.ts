import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkDetailComponent } from '../add-work-detail/add-work-detail.component';
import { AppComponent } from '../app.component';
import { ListRecordComponent} from '../list-record/list-record.component';
const routes: Routes = [
  {
    path: '',
    component: ListRecordComponent
  },
  {
    
      path: 'addworkdetails',
      component: AddWorkDetailComponent,
  },
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
