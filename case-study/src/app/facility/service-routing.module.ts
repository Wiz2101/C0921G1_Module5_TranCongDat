import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterModule, Routes} from '@angular/router';
import {FacilityVisualComponent} from './visual/facility-visual.component';
import {ServiceCreateComponent} from './create/service-create.component';
import {ServiceEditComponent} from './edit/service-edit.component';
import {ServiceListComponent} from './list/service-list.component';

const routes: Routes = [
  {
    path: 'visual', component: FacilityVisualComponent
  },
  {
    path: 'list', component: ServiceListComponent
  },
  {
    path: 'create', component: ServiceCreateComponent
  },
  {
    path: 'edit/:id', component: ServiceEditComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
