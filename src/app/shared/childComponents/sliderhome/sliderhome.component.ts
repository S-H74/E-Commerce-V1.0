import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { product_Interfcae } from '../../interfaces/product-interface';

@Component({
  selector: 'app-sliderhome',
  imports: [CarouselModule],
  templateUrl: './sliderhome.component.html',
  styleUrl: './sliderhome.component.scss'
})
export class SliderhomeComponent {
  @Input({required:true}) productImages !: product_Interfcae[];
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,

    navSpeed: 700,

    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 10,
      }
    },
    nav: true
  }
}
