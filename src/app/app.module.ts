import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppService } from './app.service'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MusicComponent } from './music/music.component';
import { LoadingComponent } from './core/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MusicComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
