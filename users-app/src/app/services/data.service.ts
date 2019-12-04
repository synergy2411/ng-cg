import { Injectable } from "@angular/core";
import { USER_DATA }  from '../model/mocks';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class DataService{
  // private users : User[] = [];
  counter : number = 0;

  constructor(private httpClient : HttpClient){
    // this.users = USER_DATA;
    // this.httpClient.get("assets/model/user-data.json")
    //   .subscribe(
    //     (response) => {console.log(response)},
    //     (err) => {console.log(err)},
    //     () => {console.log("[COMPLETED]")}
    //   )
  }

  getData(){
    // return this.users.splice(0);
    // return this.httpClient.get("assets/model/user-data.json");
    return this.httpClient.get<User[]>("https://new-cnx.firebaseio.com/userdata.json");
  }
}
