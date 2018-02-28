import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SafePipe } from './pipes/safe';

import { AppService } from './app.service';
import { PlayerService } from './player/player.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { LoadingComponent } from './core/loading/loading.component';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MusicComponent,
    LoadingComponent,
    PlayerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'content-site'),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AppService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
