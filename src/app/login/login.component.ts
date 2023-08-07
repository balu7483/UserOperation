import { Component } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
email:string='';
password:string='';

constructor(private route:Router,private loginservice:LoginService) {}

login(){
  if(this.loginservice.Login(this.email,this.password)){
   this.route.navigateByUrl('/user')
  }
}
  //  registerGuard: CanActivateFn = (route, state) => {
  //   return this.loginservice.isLoggedIn;

  
  // };



}
