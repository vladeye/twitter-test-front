import { Component, Output, EventEmitter } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-list-header',
  templateUrl: 'tweet-list-header.component.html',
  styleUrls: ['tweet-list-header.component.css']
})
export class TweetListHeaderComponent {

  newTweet: Tweet = new Tweet();

  @Output()
  add: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  addTweet() {
    this.add.emit(this.newTweet.text);
    this.newTweet = new Tweet();
  }

}
