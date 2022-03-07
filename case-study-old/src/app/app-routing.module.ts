import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CusListComponent} from './customer/cus-list/cus-list.component';
import {CusCreateComponent} from './customer/cus-create/cus-create.component';
import {CusEditComponent} from './customer/cus-edit/cus-edit.component';

const routes: Routes = [
  // {path: 'employee', loadChildren: () => import('./employee/emp-routing.module').then(module => module.EmpRoutingModule)},
  // {path: 'customer', loadChildren: () => import('./customer/cus-routing.module').then(module => module.CusRoutingModule)},
  // {path: 'service', loadChildren: () => import('./facility/fac-routing.module').then(module => module.FacRoutingModule)},
  // {path: 'contract', loadChildren: () => import('./contract/con-routing.module').then(module => module.ConRoutingModule)}
  {path: 'customer/list', component: CusListComponent},
  {path: 'create', component: CusCreateComponent},
  {path: 'edit/:id', component: CusEditComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
