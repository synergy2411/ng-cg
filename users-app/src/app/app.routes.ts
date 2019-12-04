import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { UserComponent } from './user/user.component';

export const APP_ROUTES: Routes = [{
  path: "",                              // http://localhost:4200 > http://localhost:4200/login
  redirectTo: "login",
  pathMatch: "full"
}, {
  path: "login",                          // http://localhost:4200/login
  component: LoginComponent
}, {
  path: "register",                        // http://localhost:4200/register
  component: RegisterComponent
}, {
  path: "pipe",                           // http://localhost:4200/pipe
  component: PipeDemoComponent
}, {
  path: "observable",                     // http://localhost:4200/observable
  component: ObservableDemoComponent
}, {
  path: "user",                          // http://localhost:4200/user
  component: UserComponent
}, {
  path: "**",                            // http://localhost:4200/notExist > // http://localhost:4200/login
  redirectTo: "login",
  pathMatch: "full"
}]
