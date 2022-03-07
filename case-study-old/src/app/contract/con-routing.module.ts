import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ConListComponent} from './con-list/con-list.component';
import {ConCreateComponent} from './con-create/con-create.component';
import {ConEditComponent} from './con-edit/con-edit.component';

const routes: Routes = [
  {path: 'list', component: ConListComponent},
  {path: 'create', component: ConCreateComponent},
  {path: 'edit/:id', component: ConEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConRoutingModule { }
