import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgericonComponent } from './hamburgericon.component';

describe('HamburgericonComponent', () => {
  let component: HamburgericonComponent;
  let fixture: ComponentFixture<HamburgericonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgericonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgericonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
