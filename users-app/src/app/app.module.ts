import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NationalCodePipe } from './pipes/nationalcode.pipe';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserComponent } from './user/user.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';


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
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent
  ],
  imports: [              // to import & register all modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    },{
      provide : HTTP_INTERCEPTORS,
      useClass : LoggerInterceptorService,
      multi : true
    }
  ],          // services
  bootstrap: [AppComponent]         //
})
export class AppModule { }
