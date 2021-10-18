import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementheaderComponent } from './managementheader.component';

describe('ManagementheaderComponent', () => {
  let component: ManagementheaderComponent;
  let fixture: ComponentFixture<ManagementheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
