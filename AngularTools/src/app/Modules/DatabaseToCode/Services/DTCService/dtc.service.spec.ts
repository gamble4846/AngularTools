import { TestBed } from '@angular/core/testing';

import { DTCService } from './dtc.service';

describe('DTCService', () => {
  let service: DTCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DTCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
