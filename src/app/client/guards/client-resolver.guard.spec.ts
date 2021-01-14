import { TestBed } from '@angular/core/testing';

import { ClientResolverGuard } from './client-resolver.guard';

describe('ClientResolverGuard', () => {
  let guard: ClientResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClientResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
