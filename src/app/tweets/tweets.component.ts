import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitterDataService } from '../twitter-data.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: 'tweets.component.html',
  styleUrls: ['tweets.component.css'],
  providers: [TwitterDataService]
})
export class TweetsComponent implements OnInit, OnDestroy {


    tweets: Tweet[] = [];
    connection: any;

    constructor(
    private twitterDataService: TwitterDataService
    ) {
    }

      public ngOnInit() {

          this.connection = this.twitterDataService.getTweetsFromServer().subscribe(tweet => {
              console.log('inside ngOnInit()');
              console.log(tweet);
              this.tweets = this.tweets.concat(tweet);
          })

          this.twitterDataService.getCoordinates()
              .subscribe(ip => {
                  this.twitterDataService.getHomeTimeline(ip.lat, ip.lon, ip.city)
                      .subscribe(
                          (tweets) => {
                              for (let tweet of tweets['statuses']) {

                                  let newTweet = new Tweet(
                                      {
                                          id: tweet['id'],
                                          text: tweet['text'],
                                          username: tweet['user']['name'],
                                          screen_name: tweet['user']['screen_name'],
                                          date: tweet['created_at'],
                                          profile_image_url: tweet['user']['profile_image_url']
                                      }
                                  );
                                  this.tweets.push(newTweet);
                              }
                              ;
                          }
                      )
              })
      }

    onAddTweet(tweettext) {
        this.twitterDataService
          .addTweet(tweettext)
          .subscribe(
            (newTweet) => {
              this.tweets = this.tweets.concat(newTweet);
            }
          );
    }



  ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
