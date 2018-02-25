import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ApiResult } from './classes/apiResult';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  private apiKey:string = 'api-key=572bfb4bc079402581df7d170435e659';
  private contentUrl:string = 'https://api.nytimes.com/svc/topstories/v2/tmagazine.json?' + this.apiKey;

  getHomeContent(): Observable<ApiResult> {
    const results = this.http.get<ApiResult>(this.contentUrl);
    return results;
  }

}
