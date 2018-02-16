import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
