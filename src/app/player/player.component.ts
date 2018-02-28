import { Component, OnInit } from '@angular/core';
import { Song } from '../classes/song';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(
    private appService: AppService,
    private playerService: PlayerService
  ) { }

  currentSong: Song;
  SCiframe: string = null;

  getCurrentSong(): void {
    this.playerService.broadcastCurrentSong()
      .subscribe(currentSong => this.currentSong = currentSong);
  }

  closePlayer() {
    this.playerService.setCurrentSong(null);
  }

  ngOnInit() {
  }

}
