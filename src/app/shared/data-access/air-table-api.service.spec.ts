import { TestBed } from '@angular/core/testing';

import { AirTableApiService } from './air-table-api.service';

describe('AirTableApiService', () => {
  let service: AirTableApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirTableApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
