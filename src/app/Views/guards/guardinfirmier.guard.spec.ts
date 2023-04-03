import { TestBed } from '@angular/core/testing';

import { GuardinfirmierGuard } from './guardinfirmier.guard';

describe('GuardinfirmierGuard', () => {
  let guard: GuardinfirmierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardinfirmierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
