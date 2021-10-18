import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementdataspecificComponent } from './managementdataspecific.component';

describe('ManagementdataspecificComponent', () => {
  let component: ManagementdataspecificComponent;
  let fixture: ComponentFixture<ManagementdataspecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementdataspecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementdataspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
