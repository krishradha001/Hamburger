import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostComparisionComponent } from './cost-comparision.component';

describe('CostComparisionComponent', () => {
  let component: CostComparisionComponent;
  let fixture: ComponentFixture<CostComparisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostComparisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
