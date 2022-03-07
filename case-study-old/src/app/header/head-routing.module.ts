import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {EmpListComponent} from '../employee/emp-list/emp-list.component';
import {CusListComponent} from '../customer/cus-list/cus-list.component';
import {FacListComponent} from '../facility/fac-list/fac-list.component';

const routes: Routes = [
  {path: 'employee13', component: EmpListComponent},
  {path: 'customer13', component: CusListComponent},
  {path: 'service', component: FacListComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HeadRoutingModule {
}
