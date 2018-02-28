import { Injectable } from '@angular/core';
import { PlayerComponent } from './player.component';
import { Song } from '../classes/song';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PlayerService {

  public currentSong: Song;
  
  constructor() { }

  setCurrentSong(song: Song){
    this.currentSong = song;
  }

  broadcastCurrentSong(): Observable<Song> {
    return of(this.currentSong);
  }

}
