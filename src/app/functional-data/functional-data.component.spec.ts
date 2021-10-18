import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalDataComponent } from './functional-data.component';

describe('FunctionalDataComponent', () => {
  let component: FunctionalDataComponent;
  let fixture: ComponentFixture<FunctionalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
