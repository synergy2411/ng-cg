import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent {

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes...")
    }, 3000 );
  })

  contact_number = 987654321;

  filteredStatus = "";
  todos = [{
    label : "Renew the insurance",
    status : 'done'
  },{
    label : "Pot the plants",
    status : 'pending'
  },{
    label : "repair the bike",
    status : 'done'
  },{
    label : "read the book",
    status : 'done'
  }]

  newTodoLabel : string;
  newTodoStatus : string;
  onAddNewItem(){
    this.todos.push({label : this.newTodoLabel, status : this.newTodoStatus})
  }


}
