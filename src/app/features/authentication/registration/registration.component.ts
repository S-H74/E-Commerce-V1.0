import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AuthenticationAPIService } from '../../../core/services/authenticationAPI/authentication-api.service';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  //------------------- AuthenticationAPIService -------------------
  private authenticationAPIService = inject(AuthenticationAPIService);
  API_Message : string = "";
  Loading :boolean = false;
  routing = inject(Router);
  userToken !:string;
    registerForm : FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][A-Za-z0-9 ]{3,10}$/)]),
    rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][A-Za-z0-9 ]{3,10}$/)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
  },this.confirmationPasswords);

  //--------------------- regiser-button ---------------------
  registerSubmot(){
    if (this.registerForm.valid) {
      this.Loading = true;
      this.authenticationAPIService.sendingResgistrationToAPI(this.registerForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if (res.message == "success") {
          // this.userToken = localStorage.setItem(string);
          this.routing.navigate(['/home']);
        }
        this.Loading = false;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
        this.Loading = false;
        this.API_Message = err.error.message;
      }
    })
    }
  };
  // ------------------- PasswordsMatched ? -------------------
  confirmationPasswords(allGroup : AbstractControl)
  {
    if(allGroup.get('password')?.value === allGroup.get('rePassword')?.value)
    {
      return null
    }
    else{
      return {'msMatchedPasswords': true};
    }
  };

}
