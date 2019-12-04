import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token : string = null;

  constructor() { }

  // User registration
  registerUser(email : string, password  :string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("[User Registered]");
      }).catch(err => {console.log("ERROR", err)})
  }

  // User Login
  loginUser(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("[User logged in]");
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
          }).catch(err => console.log("ERROR", err));
      }).catch(err => {console.log("ERROR", err)});
  }

  // User Sign out
  // Managing Token
  getToken(){
    return this.token;
  }
  isAuthenticated() : boolean{
    return this.token != null;
  }
}
