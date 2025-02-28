import { Component, inject, Input } from '@angular/core';
import { product_Interfcae } from '../../../shared/interfaces/product-interface';
import {RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/eCommerceAPI/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  public toastrService = inject(ToastrService);
  constructor(private cartService:CartService)
  {
  };
  @Input({required:true}) productCard !: product_Interfcae;
  addToCart(pId:string)
  {
    this.cartService.AddToCartAPI(pId).subscribe(
      {
        next:(res)=>{
          this.toastrService.success(res.message,"Adding item to Shopping cart");
        }
      }
    )
  }

}
