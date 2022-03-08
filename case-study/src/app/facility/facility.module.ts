import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityVisualComponent } from './visual/facility-visual.component';
import { FacilityCreateComponent } from './create/facility-create.component';
import { FacilityEditComponent } from './edit/facility-edit.component';
import {FacilityRoutingModule} from './facility-routing.module';
import { FacilityListComponent } from './list/facility-list.component';



@NgModule({
  declarations: [FacilityVisualComponent, FacilityCreateComponent, FacilityEditComponent, FacilityListComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule { }
