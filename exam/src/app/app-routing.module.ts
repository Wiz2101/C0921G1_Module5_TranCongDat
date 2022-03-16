import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './crud/create/create.component';
import {ListComponent} from './crud/list/list.component';

const routes: Routes = [
  {
    path: 'container', component: ListComponent
  },
  {
    path: 'container/create', component: CreateComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
