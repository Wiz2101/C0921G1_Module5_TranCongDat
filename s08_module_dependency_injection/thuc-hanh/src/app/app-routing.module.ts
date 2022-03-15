import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product-management/product-routing.module').then(module => module.ProductRoutingModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./product-management/category/category-routing.module').then(module => module.CategoryRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
