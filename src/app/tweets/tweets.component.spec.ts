import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittersComponent } from './tweets.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiMockService } from '../api-mock.service';
import { TwitterDataService } from '../twitter-data.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe('TwitterComponent', () => {
  let component: TwittersComponent;
  let fixture: ComponentFixture<TwittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwittersComponent],
      providers: [
        TwitterDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({
              todos: []
            })
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
