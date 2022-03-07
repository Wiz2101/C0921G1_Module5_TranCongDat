import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmpListComponent} from './emp-list/emp-list.component';
import {EmpCreateComponent} from './emp-create/emp-create.component';
import {EmpEditComponent} from './emp-edit/emp-edit.component';

const routes: Routes = [
  {path: 'list', component: EmpListComponent},
  {path: 'create', component: EmpCreateComponent},
  {path: 'edit/:id', component: EmpEditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmpRoutingModule { }
