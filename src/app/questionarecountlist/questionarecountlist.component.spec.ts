import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarecountlistComponent } from './questionarecountlist.component';

describe('QuestionarecountlistComponent', () => {
  let component: QuestionarecountlistComponent;
  let fixture: ComponentFixture<QuestionarecountlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionarecountlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarecountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
