import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/eCommerceAPI/cart/cart.service';
import { cartItem } from '../../../shared/interfaces/cart-item';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private toastrService = inject(ToastrService);
  private routing = inject(Router);
  cartItems :cartItem[]=[];
  totalPrice : number = 0;
  cart_Id !:string;

  constructor(  private cartService : CartService){};
  ngOnInit(): void{
    this.myCart();
  };

  myCart(){
    this.cartService.getFromCartAPI().subscribe({
    next:(res)=>{
      this.cartItems =res.data.products;
      this.totalPrice = res.data.totalCartPrice;
      this.cart_Id = res.cartId;
    }
    })
  };
  removeCart(productId: string){
    this.cartService.deleteSpecificCartItemToCartAPI(productId).subscribe({
      next:(res)=>{
        if (res.status =="success") {
          this.toastrService.success("Item has been removed successfully from your cart-list", "operation Successfully");
          this.myCart();
        };
      }
    })
  };
  increment_Item(product_Id:string , product_Count:number){
      this.cartService.updateToCartAPI(product_Id,product_Count).subscribe({
        next:(res)=>{
          this.toastrService.success("Item updated Successfully");
          this.myCart();
        }
      }
      )
  };
  decrement_Item(product_Id:string , product_Count:number){
      this.cartService.updateToCartAPI(product_Id,product_Count).subscribe({
        next:(res)=>{
          if (product_Count ==0) {
            this.removeCart(product_Id);
            return
          }
          this.toastrService.success("Item updated Successfully");
          this.myCart();
        }
      }
      )
  };
  emptyCart(){
    this.cartService.clearCartToCartAPI().subscribe({
      next:(res)=>{
        // this.myCart();
        this.routing.navigate(['/home']);
        this.toastrService.success("cart has been epmty successfully");
      }
    })
  }
}
