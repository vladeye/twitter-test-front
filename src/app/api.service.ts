import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Tweet } from './tweet';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from "../environments/environment";
import {HttpResponse} from "@angular/common/http";
import {Ip} from "./ip";

import * as io from 'socket.io-client';

const API_URL = environment.apiUrl;
const IP_URL = environment.ipUrl;


interface TwitterResponse {
  mytweets: Tweet[];
}

@Injectable()
export class ApiService {

  private socket;
  constructor(
    private http: HttpClient
  ) {
  }

  public getTweetsFromServer(): Observable<Tweet> {
    let observable = new Observable<Tweet>(observer => {
      this.socket = io(API_URL);
      this.socket.on('tweetSend', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  public getCoordinates(): Observable<Ip> {
    return this.http.get<Ip>(IP_URL);
  }

  public getHomeTimeline(lat: number, lon: number, city: string) {
    let params = {
      q: "NowPlaying",
      result_type: "recent",
      geocode: lat.toString()+","+lon.toString()+",12mi",
      city: city
    }
    return this.http.post(API_URL + '/api/v1.0/search/tweets',params)
        .catch(this.handleError);
  }

  public createTweet(tweettext: string): Observable<Tweet> {
    let params = {
      status: tweettext
    }
    return this.http
      .post(API_URL + '/api/v1.0/statuses/create', params)
      .catch(this.handleError);
  }


  private handleError (error: HttpResponse<any>) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
