import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { PlatFormService } from '../platForm/plat-form.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationAPIService {
  userData : BehaviorSubject<any> = new BehaviorSubject(null);
  private httpClient = inject(HttpClient);
  private platFormService = inject(PlatFormService);
  constructor() {
    if (this.platFormService.checkingPlatForm()) {
      this.getUserData();
    }
  };
  sendingResgistrationToAPI(registrationInfo : object):Observable<any>{
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',registrationInfo);
  };
  sendingLoginToAPI(loginInfo : object) : Observable<any> {
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',loginInfo);
  };
  getUserData()
  {
    if (localStorage.getItem('userToken') != null) {
    this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem('userToken'))));
    }
  };
}

