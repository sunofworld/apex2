import { TestBed } from '@angular/core/testing';

import { TodateService } from './todate.service';

describe('TodateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodateService = TestBed.get(TodateService);
    expect(service).toBeTruthy();
  });
});
