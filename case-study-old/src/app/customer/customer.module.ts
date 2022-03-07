import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CusListComponent} from './cus-list/cus-list.component';
import {CusCreateComponent} from './cus-create/cus-create.component';
import {CusEditComponent} from './cus-edit/cus-edit.component';


@NgModule({
  declarations: [
    CusListComponent,
    CusCreateComponent,
    CusEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
