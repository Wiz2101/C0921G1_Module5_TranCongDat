import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './list/employee-list.component';
import { EmployeeCreateComponent } from './create/employee-create.component';
import { EmployeeEditComponent } from './edit/employee-edit.component';
import {EmployeeRoutingModule} from './employee-routing.module';



@NgModule({
  declarations: [EmployeeListComponent, EmployeeCreateComponent, EmployeeEditComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
