import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from './store/counter.actions';

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
    this.store.dispatch(new counterActions.Increment());
   }

  onDecrement() {
    this.store.dispatch(new counterActions.Decrement());
   }

   onAdd(num : number){
     this.store.dispatch(new counterActions.AddCounter(num));
   }

   onSubstract(num : number){
     this.store.dispatch(new counterActions.SubstractCounter(num));
   }
}
