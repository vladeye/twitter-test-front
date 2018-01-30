import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { BaseRequestOptions,  XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClient } from "@angular/common/http";

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        ApiService
      ]
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
