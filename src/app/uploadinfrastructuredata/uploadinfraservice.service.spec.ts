import { TestBed } from '@angular/core/testing';

import { UploadinfraserviceService } from './uploadinfraservice.service';

describe('UploadinfraserviceService', () => {
  let service: UploadinfraserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadinfraserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
