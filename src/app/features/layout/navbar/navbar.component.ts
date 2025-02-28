import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationAPIService } from '../../../core/services/authenticationAPI/authentication-api.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private authenticationAPIService = inject(AuthenticationAPIService);
  routing = inject(Router);
  isLoading : boolean = false;
  constructor(){};
  ngOnInit() : void{
    this.authenticationAPIService.userData.subscribe(()=>{
      if (this.authenticationAPIService.userData.getValue() !=null){
        this.isLoading = true;
      }
    else{
      this.isLoading = false;
    }}
  )};
  logOut(){
    localStorage.removeItem('userToken');
    this.authenticationAPIService.userData.next(null);
    this.routing.navigate(['/login']);
  };
};
