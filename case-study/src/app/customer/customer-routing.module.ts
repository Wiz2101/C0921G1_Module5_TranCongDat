import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './list/customer-list.component';
import {CustomerCreateComponent} from './create/customer-create.component';
import {CustomerEditComponent} from './edit/customer-edit.component';
import {CustomerDeleteComponent} from './delete/customer-delete.component';

const  routes: Routes = [
  {
    path: 'list', component: CustomerListComponent
  },
  {
    path: 'create', component: CustomerCreateComponent
  },
  {
    path: 'edit/:id', component: CustomerEditComponent
  },
  {
    path: 'delete/:id', component: CustomerDeleteComponent
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
export class CustomerRoutingModule { }
