import { TestBed } from '@angular/core/testing';

import { GuardmedecinGuard } from './guardmedecin.guard';

describe('GuardmedecinGuard', () => {
  let guard: GuardmedecinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardmedecinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
