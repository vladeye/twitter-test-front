import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from '../tweet';

@Component(
  {
    selector: 'app-tweet-list',
    templateUrl: 'tweet-list.component.html',
    styleUrls: ['tweet-list.component.css']
  }
)
export class TweetListComponent {

  @Input()
  tweets: Tweet[];

  constructor() {
  }

}
