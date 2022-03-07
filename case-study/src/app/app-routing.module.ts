import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContractModule} from './contract/contract.module';
import {EmployeeModule} from './employee/employee.module';
import {FacilityModule} from './facility/facility.module';
import {CustomerModule} from './customer/customer.module';

const routes: Routes = [
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContractModule,
    CustomerModule,
    EmployeeModule,
    FacilityModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
