import { TestBed } from '@angular/core/testing';

import { VisitResolverGuard } from './visit-resolver.guard';

describe('ClientResolverGuard', () => {
  let guard: VisitResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VisitResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
