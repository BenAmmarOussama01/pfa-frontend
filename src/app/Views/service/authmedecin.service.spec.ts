import { TestBed } from '@angular/core/testing';

import { AuthmedecinService } from './authmedecin.service';

describe('AuthmedecinService', () => {
  let service: AuthmedecinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthmedecinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
