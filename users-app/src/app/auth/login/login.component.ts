import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  onLogin(f : NgForm){
    console.log("Username : ", f.value.username);
    console.log("Password : ", f.value.password);
  }
}
