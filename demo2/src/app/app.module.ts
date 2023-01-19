import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogDetailsComponent } from './components/dog-details/dog-details.component';
import { DogListComponent } from './components/dog-list/dog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogDetailsComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
