import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { AppService } from '../app.service';
import { PlayerService } from '../player/player.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Song } from '../classes/song';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  appService: AppService;
  songs: Observable<any[]>;
  songsCollections;
  exampleSong: Song = {
    artist: 'Miami Horror',
    title: 'I Look To You',
    artwork_url: 'https://i1.sndcdn.com/artworks-000002407710-sfpeln-t500x500.jpg',
    soundcloud_id: '5487943'
  };

  constructor(
    db: AngularFirestore,
    private playerService: PlayerService
  ) {
    this.songs = db.collection('songs').valueChanges();
    this.songsCollections = db.collection<any>('songs');
  }

  save(song: Song) {
    this.songsCollections.add({ song });
  }

  changeSong(song: Song){
    this.playerService.setCurrentSong(song);
  }

  ngOnInit() {
  }

}
