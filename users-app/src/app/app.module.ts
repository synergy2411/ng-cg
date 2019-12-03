import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [         // components, directives, pipes
    AppComponent,
    UserComponent,
    UserImageComponent,
    UserInfoComponent,
    HighlightDirective
  ],
  imports: [              // to import & register all modules
    BrowserModule,
    FormsModule
  ],
  providers: [],          // services
  bootstrap: [AppComponent]         //
})
export class AppModule { }
