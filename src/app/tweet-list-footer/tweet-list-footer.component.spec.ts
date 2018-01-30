/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TweetListFooterComponent } from './tweet-list-footer.component';
import { Tweet } from '../tweet';

describe('TweetListFooterComponent', () => {
  let component: TweetListFooterComponent;
  let fixture: ComponentFixture<TweetListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListFooterComponent);
    component = fixture.componentInstance;
    component.tweets = [
      new Tweet({ id: 1, title: 'Test', complete: false })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
