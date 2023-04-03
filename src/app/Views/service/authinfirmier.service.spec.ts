import { TestBed } from '@angular/core/testing';

import { AuthinfirmierService } from './authinfirmier.service';

describe('AuthinfirmierService', () => {
  let service: AuthinfirmierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthinfirmierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
