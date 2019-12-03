import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [         // components, directives, pipes
    AppComponent,
    UserComponent
  ],
  imports: [              // to import & register all modules
    BrowserModule,
    FormsModule 
  ],
  providers: [],          // services
  bootstrap: [AppComponent]         //
})
export class AppModule { }
