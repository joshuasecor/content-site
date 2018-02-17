import { Component, OnInit } from '@angular/core';
import { ApiResult } from '../classes/apiResult';
import { Results } from '../classes/results';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  limeSVG = './assets/lime.svg';

  constructor(
    private appService: AppService
  ) { }

  homeContent: ApiResult;
  homeContentResults: Results[];

  public imagesToLoad = 15;
  public imagesLoaded = 0;

  ngOnInit() {
    this.getContent();
  }

  private getContent(): void {
    this.appService.getContent()
      .subscribe(content => { 
        this.homeContent = content;
        this.homeContentResults = content.results;
        if (this.homeContentResults.length < this.imagesToLoad) {
          this.imagesToLoad = this.homeContentResults.length;
        };
      });
  }

  public getRandomValue() {
    return Math.floor(Math.random() * 3) + 1;
  }

  public loadImage() {
    this.imagesLoaded++;
  }

}
