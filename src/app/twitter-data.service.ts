import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import {Ip} from "./ip";

@Injectable()
export class TwitterDataService {

  constructor(
    private api: ApiService
  ) {
  }

  getCoordinates(): Observable<Ip> {
    return this.api.getCoordinates();
  }
  // Simulate POST /tweet
  addTweet(tweettext: string): Observable<Tweet> {
    return this.api.createTweet(tweettext);
  }


  getHomeTimeline(lat, lon, city): Observable<any> {
    return this.api.getHomeTimeline(lat, lon, city);

  }

  getTweetsFromServer(): Observable<Tweet> {
    return this.api.getTweetsFromServer();
  }


}
