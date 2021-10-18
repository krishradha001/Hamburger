import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalAppdataComponent } from './functional-appdata.component';

describe('FunctionalAppdataComponent', () => {
  let component: FunctionalAppdataComponent;
  let fixture: ComponentFixture<FunctionalAppdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalAppdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalAppdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
