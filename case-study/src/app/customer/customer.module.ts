import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerCreateComponent} from './create/customer-create.component';
import {CustomerEditComponent} from './edit/customer-edit.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {CustomerListComponent} from './list/customer-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CustomerDeleteComponent } from './delete/customer-delete.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerEditComponent, CustomerDeleteComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule
  ]
})

export class CustomerModule {
}
