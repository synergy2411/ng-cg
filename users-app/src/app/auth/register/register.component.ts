import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  username = new FormControl(null, [
    Validators.email,
    Validators.required
  ]);
  password = new FormControl(null, [
    Validators.required,
    Validators.minLength(6)
  ]);

  registerForm : FormGroup;

  constructor(private fb : FormBuilder){
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  onRegister(){
    console.log(this.registerForm);
  }

}
