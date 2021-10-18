import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseStatsComponent } from './analyse-stats.component';

describe('AnalyseStatsComponent', () => {
  let component: AnalyseStatsComponent;
  let fixture: ComponentFixture<AnalyseStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
