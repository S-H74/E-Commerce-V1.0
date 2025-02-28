import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Env } from '../../../Environment/Environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private $products:Observable<any> | null = null;
  constructor() { }
  httpClient = inject(HttpClient);
  getAllProducts(): Observable<any>
  {
    return this.httpClient.get(`${Env.baseURL}/api/v1/products`);
  };
  getSpecificProduct(P_ID :string | null):Observable<any>
  {
    return this.httpClient.get(`${Env.baseURL}/api/v1/products/${P_ID}`);
  };
  getProductsWithShareReplay():Observable<any>{
    if (!this.$products) {
      this.$products = this.httpClient.get<any>(`${Env.baseURL}/api/v1/products`).pipe(shareReplay(1));
    };
    return this.$products;
  };

}
