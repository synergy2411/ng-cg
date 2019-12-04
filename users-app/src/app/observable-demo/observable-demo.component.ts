import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent {

  observableData = Observable.create(observer => {
    setTimeout(() => {
      observer.next("First Package")
    }, 1000)

    setTimeout(()=>{
      observer.next("Second Package")
    }, 2000);

    setTimeout(()=>{
      observer.next("Third Package")
    }, 4000);

    setTimeout(()=>{
      observer.error(new Error("Something bad happened!"))
    }, 5000);

    setTimeout(()=>{
      observer.complete();
    }, 6000);
  })

  packages = [];
  subscriptionObs : Subscription;

  onSubscribe(){
    this.subscriptionObs = this.observableData.subscribe(
      response => this.packages.push(response),
      err => console.log(err),
      () => console.log("Completed")
    )
  }

  onUnsubscribe(){
    this.subscriptionObs.unsubscribe();
  }
}
