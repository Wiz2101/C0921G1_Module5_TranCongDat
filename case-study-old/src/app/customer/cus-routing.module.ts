import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CusListComponent} from './cus-list/cus-list.component';
import {CusCreateComponent} from './cus-create/cus-create.component';
import {CusEditComponent} from './cus-edit/cus-edit.component';

const routes: Routes = [

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CusRoutingModule { }
