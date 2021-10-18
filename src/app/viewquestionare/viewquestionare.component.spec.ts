import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquestionareComponent } from './viewquestionare.component';

describe('ViewquestionareComponent', () => {
  let component: ViewquestionareComponent;
  let fixture: ComponentFixture<ViewquestionareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquestionareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquestionareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
