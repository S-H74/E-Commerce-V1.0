import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private httpClient :HttpClient = inject(HttpClient);
  constructor() { };
  AddToCartAPI(pId :string): Observable<any>
  {
    return this.httpClient.post(`${Env.baseURL}/api/v1/cart`,{productId:pId});
  };
  updateToCartAPI(product_Id: string,product_Count: number):Observable<any>
  {
    return this.httpClient.put(`${Env.baseURL}/api/v1/cart/${product_Id}`,{count :product_Count});
  };
  getFromCartAPI():Observable<any>
  {
    return this.httpClient.get(`${Env.baseURL}/api/v1/cart`)};
  deleteSpecificCartItemToCartAPI(pId:string):Observable<any>
  {
    return this.httpClient.delete(`${Env.baseURL}/api/v1/cart/${pId}`)};
  clearCartToCartAPI():Observable<any>
  {
    return this.httpClient.delete(`${Env.baseURL}/api/v1/cart`)};
}
