import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContractModule} from './contract/contract.module';
import {EmployeeModule} from './employee/employee.module';
import {ServiceModule} from './facility/service.module';
import {CustomerModule} from './customer/customer.module';
import {HomeComponent} from './home/home.component';

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
    loadChildren: () => import('./facility/service.module').then(module => module.ServiceModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContractModule,
    CustomerModule,
    EmployeeModule,
    ServiceModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {
}
