import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { };
  private httpClient = inject(HttpClient);
  private $categories : Observable<any> | null = null;
  getAllCategories() :Observable<any>{
    if (!this.$categories) {
      this.$categories = this.httpClient.get<any>(`${Env.baseURL}/api/v1/categories`).pipe(shareReplay(1));
    };
  return this.$categories;
  };
}
