import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './list/contract-list.component';
import { ContractCreateComponent } from './create/contract-create.component';
import { ContractEditComponent } from './edit/contract-edit.component';
import {ContractRoutingModule} from './contract-routing.module';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ContractListComponent, ContractCreateComponent, ContractEditComponent],
    imports: [
        CommonModule,
        ContractRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContractModule { }
