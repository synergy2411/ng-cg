import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private authService : AuthService){}

  onLogin(f : NgForm){
    console.log("Username : ", f.value.username);
    console.log("Password : ", f.value.password);
    this.authService.loginUser(f.value.username, f.value.password);
  }
}
