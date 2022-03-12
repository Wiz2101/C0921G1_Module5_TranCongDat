import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityVisualComponent } from './visual/facility-visual.component';
import { ServiceCreateComponent } from './create/service-create.component';
import { ServiceEditComponent } from './edit/service-edit.component';
import {ServiceRoutingModule} from './service-routing.module';
import { ServiceListComponent } from './list/service-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ServiceDeleteComponent } from './delete/service-delete.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [FacilityVisualComponent, ServiceCreateComponent, ServiceEditComponent, ServiceListComponent, ServiceDeleteComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class ServiceModule { }
