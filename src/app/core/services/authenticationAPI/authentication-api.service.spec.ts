import { TestBed } from '@angular/core/testing';

import { AuthenticationAPIService } from './authentication-api.service';

describe('AuthenticationAPIService', () => {
  let service: AuthenticationAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
