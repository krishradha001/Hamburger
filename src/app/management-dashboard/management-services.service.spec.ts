import { TestBed } from '@angular/core/testing';

import { ManagementServicesService } from './management-services.service';

describe('ManagementServicesService', () => {
  let service: ManagementServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
