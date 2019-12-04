import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title : string = "An Awesome App";
  showUser : boolean = true;

  constructor(public dataService : DataService){}

  onIncreases(){
    this.dataService.counter++;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCdvobytUhRiqxfqA_QAE4SfjzvGni90Vw",
      authDomain: "new-cnx.firebaseapp.com"
    })
  }
}
