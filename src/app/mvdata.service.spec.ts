import { TestBed, inject } from '@angular/core/testing';

import { MvdataService } from './mvdata.service';

describe('MvdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MvdataService]
    });
  });

  it('should be created', inject([MvdataService], (service: MvdataService) => {
    expect(service).toBeTruthy();
  }));
});
