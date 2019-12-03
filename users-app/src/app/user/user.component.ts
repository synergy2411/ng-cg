import { Component } from '@angular/core';

@Component({
  selector : 'app-user',
  // template :`
  //   <h1>User Component Loaded Successfully.</h1>
  // `
  templateUrl : './user.component.html'
})
export class UserComponent{
  user = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 2, 1965"),
    company : "Microsoft",
    isWorking : true,
    income : 50000
  }
}
