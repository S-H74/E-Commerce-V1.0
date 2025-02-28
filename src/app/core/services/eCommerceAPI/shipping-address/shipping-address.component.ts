import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrdersService } from '../all-orders/orders.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shipping-address',
  imports: [ReactiveFormsModule],
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.scss'
})
export class ShippingAddressComponent {
  private ordersService =inject(OrdersService);
  cartId !:string;
  private activatedRoute =inject(ActivatedRoute)
  shippingAddress :FormGroup = new FormGroup({
    details : new FormControl(null),
    phone : new FormControl(null),
    city : new FormControl(null),
  });
  checkout_order()
  {
    this.activatedRoute.paramMap.subscribe((cart_Id)=>{
      this.cartId =cart_Id.get('cart_Id')!
      if (this.cartId !=null) {
        this.ordersService.checkout(this.cartId,this.shippingAddress.value).subscribe({
          next:(res)=>{
            window.location.href = res.session.url;
          }
        })
      }
    })
    // console.log(this.shippingAddress.value);
  }
}
