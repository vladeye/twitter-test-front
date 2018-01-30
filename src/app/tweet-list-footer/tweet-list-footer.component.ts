import { Component, Input } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-list-footer',
  templateUrl: 'tweet-list-footer.component.html',
  styleUrls: ['tweet-list-footer.component.css']
})
export class TweetListFooterComponent {

  @Input()
  tweets: Tweet[];

  constructor() {
  }

}
