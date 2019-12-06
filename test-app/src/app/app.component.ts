import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Observable<DataModel>;

  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.data = this.http.get<DataModel>('assets/data.json');
  }
}





















// import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
// import { DataService } from './data.service';
// import { DomSanitizer } from '@angular/platform-browser';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   changeDetection : ChangeDetectionStrategy.OnPush
// })
// export class AppComponent implements OnInit{
//   user = { name: "Foo" };
//   person : {name : string};

//   todos = [{label : "to pot the plant"}, {label : "to renew the insurance"}];



//   onNewArray(){
//     this.todos = [
//       {label : "to pot the plant"},
//       {label : "to renew the insurance"},
//       {label : "New Item"}
//     ]
//   }

//   trackFunc(index, label){
//     return index;
//   }

//   onAddNew(){
//     this.todos.push({label : "New Item"});
//   }

//   htmlSnippets = "HTML5 Snippets <script>javascript:alert('Cross Site Scripting')</script>";

//   dangerUrl = "javascript:alert('Hello World!')";
//   safeUrl : any;

//   constructor(private dataService : DataService,
//               private sanitize : DomSanitizer,
//               private cdRef : ChangeDetectorRef){
//                 this.safeUrl = this.sanitize.bypassSecurityTrustUrl(this.dangerUrl);
//               }


//   onDetech(){
//     this.cdRef.detach();
//   }
//   onReattach(){
//     this.cdRef.reattach();
//   }
//   ngOnInit(){
//     this.person = this.dataService.getName();
//   }

// }
