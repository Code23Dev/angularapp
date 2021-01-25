import { TestBed } from '@angular/core/testing';

import { DatamainService } from './datamain.service';

describe('DatamainService', () => {
  let service: DatamainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
