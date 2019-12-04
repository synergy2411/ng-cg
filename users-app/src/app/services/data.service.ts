import { Injectable } from "@angular/core";
import { USER_DATA }  from '../model/mocks';
import { User } from '../model/user';

@Injectable({
  providedIn : 'root'
})
export class DataService{
  private users : User[] = [];

  constructor(){
    this.users = USER_DATA;
  }

  getData(){
    return this.users.splice(0);
  }
}
