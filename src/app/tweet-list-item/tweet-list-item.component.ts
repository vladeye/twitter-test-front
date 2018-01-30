import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-list-item',
  templateUrl: 'tweet-list-item.component.html',
  styleUrls: ['tweet-list-item.component.css']
})
export class TweetListItemComponent {

  @Input() tweet: Tweet;


  constructor() {
  }


}
