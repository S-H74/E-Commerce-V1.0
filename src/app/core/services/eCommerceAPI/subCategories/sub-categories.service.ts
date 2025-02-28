import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {
  private httpClient = inject(HttpClient);
  constructor() { };
    getAllSubCategoriesOnCategory(category_Id : string):Observable<any>
  {
    return this.httpClient.get(`${Env.baseURL}/api/v1/categories/${category_Id}/subcategories`);
  };

}
