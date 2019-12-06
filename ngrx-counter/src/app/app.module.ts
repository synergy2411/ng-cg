import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { rootReducer } from './store/root.reducer';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({rootReducer}),
    StoreDevtoolsModule.instrument({logOnly : environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
