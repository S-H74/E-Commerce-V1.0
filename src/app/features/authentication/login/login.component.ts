import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthenticationAPIService } from '../../../core/services/authenticationAPI/authentication-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authenticationAPIService = inject(AuthenticationAPIService);
  routing = inject(Router);
  API_Message : string = "";
  Loading :boolean = false;
  //----------------- controls-Names and Validations -----------------
  loginForm : FormGroup = new FormGroup({
      email: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9 ]{3,10}$/)]),
    });
    // ------------------------ loginButton-function ------------------------
  loginSubmit()
  {
    if (this.loginForm.valid) {
      this.Loading =true;
      this.authenticationAPIService.sendingLoginToAPI(this.loginForm.value).subscribe(
        {
        next:(res)=>{
          if (res.message == "success") {
            console.log(res);
            localStorage.setItem('userToken',res.token);
            this.authenticationAPIService.getUserData();
            this.routing.navigate(['/home']);
          }
          this.Loading= false;
        },
        error:(err)=>{
          // this.API_Message = err.error.message;
          console.log(err,Headers);
          this.Loading= false;
        }
      }
    )
    }
  }
}
