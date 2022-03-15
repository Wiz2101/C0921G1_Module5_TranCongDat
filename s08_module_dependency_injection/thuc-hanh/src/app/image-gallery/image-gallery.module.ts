import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';
import {ImageGalleryRoutingModule} from './image-gallery-routing.module';



@NgModule({
  declarations: [ImageCardComponent],
  imports: [
    CommonModule,
    ImageGalleryRoutingModule
  ]
})
export class ImageGalleryModule { }
