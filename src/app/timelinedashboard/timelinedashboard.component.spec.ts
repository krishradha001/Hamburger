import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinedashboardComponent } from './timelinedashboard.component';

describe('TimelinedashboardComponent', () => {
  let component: TimelinedashboardComponent;
  let fixture: ComponentFixture<TimelinedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
