import { TestBed } from '@angular/core/testing';

import { MigrationwaveService } from './migrationwave.service';

describe('MigrationwaveService', () => {
  let service: MigrationwaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigrationwaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
