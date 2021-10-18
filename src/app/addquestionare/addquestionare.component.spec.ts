import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionareComponent } from './addquestionare.component';

describe('AddquestionareComponent', () => {
  let component: AddquestionareComponent;
  let fixture: ComponentFixture<AddquestionareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquestionareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
