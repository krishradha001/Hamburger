import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedinfradataComponent } from './uploadedinfradata.component';

describe('UploadedinfradataComponent', () => {
  let component: UploadedinfradataComponent;
  let fixture: ComponentFixture<UploadedinfradataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedinfradataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedinfradataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
