import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContractListComponent} from './list/contract-list.component';
import {ContractCreateComponent} from './create/contract-create.component';
import {ContractEditComponent} from './edit/contract-edit.component';

const routes: Routes = [
  {
    path: 'list', component: ContractListComponent
  },
  {
    path: 'create', component: ContractCreateComponent
  },
  {
    path: 'edit/:id', component: ContractEditComponent
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
export class ContractRoutingModule {
}
