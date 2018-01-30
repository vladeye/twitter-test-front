import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetListFooterComponent } from './tweet-list-footer/tweet-list-footer.component';
import { TweetListHeaderComponent } from './tweet-list-header/tweet-list-header.component';
import { TwitterDataService } from './twitter-data.service';
import { TweetListItemComponent } from './tweet-list-item/tweet-list-item.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TweetsComponent } from './tweets/tweets.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetListFooterComponent,
    TweetListHeaderComponent,
    TweetListItemComponent,
    PageNotFoundComponent,
    TweetsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TwitterDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
