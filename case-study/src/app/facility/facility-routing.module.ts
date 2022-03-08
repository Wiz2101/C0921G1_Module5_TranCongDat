import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterModule, Routes} from '@angular/router';
import {FacilityVisualComponent} from './visual/facility-visual.component';
import {FacilityCreateComponent} from './create/facility-create.component';
import {FacilityEditComponent} from './edit/facility-edit.component';
import {FacilityListComponent} from './list/facility-list.component';

const routes: Routes = [
  {
    path: 'visual', component: FacilityVisualComponent
  },
  {
    path: 'list', component: FacilityListComponent
  },
  {
    path: 'create', component: FacilityCreateComponent
  },
  {
    path: 'edit/:id', component: FacilityEditComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
