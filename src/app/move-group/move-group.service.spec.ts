import { TestBed } from '@angular/core/testing';

import { MoveGroupService } from './move-group.service';

describe('MoveGroupService', () => {
  let service: MoveGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
