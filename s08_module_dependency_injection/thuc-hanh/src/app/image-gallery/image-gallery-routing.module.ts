import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ImageCardComponent} from './image-card/image-card.component';

const routes: Routes = [
  {
    path: 'image-gallery', component: ImageCardComponent
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
export class ImageGalleryRoutingModule {
}
