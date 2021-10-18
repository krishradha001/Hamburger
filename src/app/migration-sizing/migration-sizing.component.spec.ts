import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationSizingComponent } from './migration-sizing.component';

describe('MigrationSizingComponent', () => {
  let component: MigrationSizingComponent;
  let fixture: ComponentFixture<MigrationSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationSizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
