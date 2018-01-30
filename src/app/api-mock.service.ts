import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTweets(): Observable<Tweet[]> {
    return Observable.of([
      new Tweet({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTweet(tweet: Tweet): Observable<Tweet> {
    return Observable.of(
      new Tweet({id: 1, title: 'Read article', complete: false})
    );
  }

  public getTweetById(todoId: number): Observable<Tweet> {
    return Observable.of(
      new Tweet({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTweet(tweet: Tweet): Observable<Tweet> {
    return Observable.of(
      new Tweet({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTweetById(tweetId: number): Observable<null> {
    return null;
  }
}
