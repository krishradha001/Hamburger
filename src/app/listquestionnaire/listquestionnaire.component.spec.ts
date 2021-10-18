import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquestionnaireComponent } from './listquestionnaire.component';

describe('ListquestionnaireComponent', () => {
  let component: ListquestionnaireComponent;
  let fixture: ComponentFixture<ListquestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListquestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
