import { Injectable } from "@angular/core";

@Injectable()

export class DataService {
  person = { name : "Person Name"};

  getName() {
    return this.person;
  }
}
