import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';
  counter: number;
  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit() {
    this.store.subscribe(
      response => {
        console.log(response)
        this.counter = response['rootReducer'].counter;
      }
    )
  }

  onIncrement() {
    this.store.dispatch({type : "INCREMENT"})
   }
  onDecrement() {
    this.store.dispatch({type : "DECREMENT"})
   }
}
