/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {TwitterDataService} from './twitter-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('TwitterDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TwitterDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([TwitterDataService], (service: TwitterDataService) => {
    expect(service).toBeTruthy();
  }));

});
