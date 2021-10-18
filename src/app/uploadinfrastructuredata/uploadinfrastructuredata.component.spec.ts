import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadinfrastructuredataComponent } from './uploadinfrastructuredata.component';

describe('UploadinfrastructuredataComponent', () => {
  let component: UploadinfrastructuredataComponent;
  let fixture: ComponentFixture<UploadinfrastructuredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadinfrastructuredataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadinfrastructuredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
