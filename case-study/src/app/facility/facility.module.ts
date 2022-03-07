import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityListComponent } from './list/facility-list.component';
import { FacilityCreateComponent } from './create/facility-create.component';
import { FacilityEditComponent } from './edit/facility-edit.component';
import {FacilityRoutingModule} from './facility-routing.module';



@NgModule({
  declarations: [FacilityListComponent, FacilityCreateComponent, FacilityEditComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule { }
