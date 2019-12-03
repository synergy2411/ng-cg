import { Component, OnChanges, Input, OnInit, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked,
    OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  // template :`
  //   <h1>User Component Loaded Successfully.</h1>
  // `
  templateUrl: './user.component.html'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('title') title : string;

  user = {
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 2, 1965"),
    company: "Microsoft",
    isWorking: true,
    income: 50000,
    image: "assets/images/bill.jpg",
    vote: 120
  }

  onInfo(user: any) {
    alert(`Mr. ${user.firstName} is working with ${user.company}!!!!`);
  }

  ngOnChanges(change : SimpleChanges){
    console.log("ngOnChanges", change);
  }
  ngOnInit(){console.log("ngOnInit");}
  ngDoCheck(){console.log("ngDoCheck");}
  ngAfterContentInit(){console.log("ngAfterContentInit");}
  ngAfterContentChecked(){console.log("ngAfterContentChecked");}
  ngAfterViewInit(){console.log("ngAfterViewInit");}
  ngAfterViewChecked(){console.log("ngAfterViewChecked");}
  ngOnDestroy(){console.log("ngOnDestroy");}
}
