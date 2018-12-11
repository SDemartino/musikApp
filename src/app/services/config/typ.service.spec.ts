import { TestBed } from '@angular/core/testing';

import { TypService } from './typ.service';

describe('TypService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypService = TestBed.get(TypService);
    expect(service).toBeTruthy();
  });
});
