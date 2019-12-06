import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user = { name: "Foo" };
  person : {name : string};

  constructor(private dataService : DataService){}

  ngOnInit(){
    this.person = this.dataService.getName();
  }

}
