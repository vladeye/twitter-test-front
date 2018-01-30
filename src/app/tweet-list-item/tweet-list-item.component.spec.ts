/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TweetListItemComponent } from './tweet-list-item.component';
import { Tweet } from '../tweet';

describe('TweetListItemComponent', () => {
  let component: TweetListItemComponent;
  let fixture: ComponentFixture<TweetListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListItemComponent);
    component = fixture.componentInstance;
    component.tweet = new Tweet({ id: 1, title: 'Test', complete: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
