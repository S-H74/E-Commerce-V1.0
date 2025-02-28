import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Env } from '../../../Environment/Environment';
import { Brand } from '../../../../shared/interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor() { }
  private httpClient = inject(HttpClient);
  private $brands : Observable<any> | null = null;
  _oneBrand :Brand[]=[]
  getProductsWithShareReplay():Observable<any>{
    if (!this.$brands) {
      this.$brands = this.httpClient.get<any>(`${Env.baseURL}/api/v1/brands`).pipe(shareReplay(1));
    };
    return this.$brands;
  };
  //------- get SpecificBrandData-------------
  getSpecificBrandData() :Observable<any>
  {
    return this.httpClient.get<any>(`${Env.baseURL}/api/v1/brands`).pipe(map(brandsResponse=>brandsResponse.data.map((oneBrand:any)=>{let brand:any={};
  brand.name = oneBrand.name; brand.image = oneBrand.image;return brand})))};
}
