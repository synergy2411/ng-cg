import { TestBed } from '@angular/core/testing';

import { LoggerInterceptorService } from './logger-interceptor.service';

describe('LoggerInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerInterceptorService = TestBed.get(LoggerInterceptorService);
    expect(service).toBeTruthy();
  });
});
