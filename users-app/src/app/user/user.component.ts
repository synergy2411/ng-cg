import {
  Component, OnChanges, Input, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, SimpleChanges
} from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service';
// import { USER_DATA } from '../model/mocks';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('title') title: string;

  users : User[];

  onInfo(user: User) {
    alert(`Mr. ${user.firstName} is working with ${user.company}!!!!`);
  }

  constructor(private dataService : DataService){ }
  ngOnChanges(change: SimpleChanges) {}
  ngOnInit() {
    // this.users = USER_DATA;
    this.users = this.dataService.getData();
  }
  ngDoCheck() {
    // console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    // console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    // console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    // console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    // console.log("ngOnDestroy");
  }
}
