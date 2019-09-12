import { TestBed } from '@angular/core/testing';

import { TooneService } from './toone.service';

describe('TooneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TooneService = TestBed.get(TooneService);
    expect(service).toBeTruthy();
  });
});
