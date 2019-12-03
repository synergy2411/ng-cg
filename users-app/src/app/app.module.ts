import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/nationalcode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [         // components, directives, pipes
    AppComponent,
    UserComponent,
    UserImageComponent,
    UserInfoComponent,
    HighlightDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent
  ],
  imports: [              // to import & register all modules
    BrowserModule,
    FormsModule
  ],
  providers: [],          // services
  bootstrap: [AppComponent]         //
})
export class AppModule { }
