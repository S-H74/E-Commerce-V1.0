import { Component, inject, Input } from '@angular/core';
import { Brand } from '../../interfaces/product-interface';

@Component({
  selector: 'app-brand-card',
  imports: [],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.scss'
})
export class BrandCardComponent {
  @Input({required:true}) _brandCardInput !: Brand;
  _brand : Brand[]=[];
}
