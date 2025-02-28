import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';
import { OrderAddress } from '../../../../shared/interfaces/order-address';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private httpClient =inject(HttpClient);
  constructor() { };
  checkout(cart_Id:string,addressFormValue:OrderAddress) :Observable<any>{
    return this.httpClient.post(`${Env.baseURL}/api/v1/orders/checkout-session/${cart_Id}?url=${Env.success_paymentURL}`,{shippingAddress :addressFormValue.shippingAddress});
  }
}
