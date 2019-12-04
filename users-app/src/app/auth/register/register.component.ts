import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb : FormBuilder, private authService : AuthService){
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  onRegister(){
    console.log(this.registerForm);
    this.authService.registerUser(
      this.registerForm.value.username,
      this.registerForm.value.password
    )
  }

}
