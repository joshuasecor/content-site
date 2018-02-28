import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiResult } from '../classes/apiResult';
import { Results } from '../classes/results';
import { AppService } from '../app.service';
import { LoadingComponent } from '../core/loading/loading.component';

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

  public imagesToLoad:number = 16;
  public imagesLoaded:number = 0;
  public loaded:boolean = false;

  ngOnInit() {
    this.getHomeContent();
  }

  private getHomeContent(): void {
    this.appService.getHomeContent()
      .subscribe(content => { 
        this.homeContent = content;
        this.homeContentResults = content.results;
        if (this.homeContent.num_results < this.imagesToLoad) {
          this.imagesToLoad = this.homeContentResults.length;
        };
      });
  }

  public loadImage() {
    this.imagesLoaded++;
    if (this.imagesLoaded >= this.imagesToLoad) {
      this.loaded = true;
    }
  }

}
