import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationgrouptargetsizingComponent } from './migrationgrouptargetsizing.component';

describe('MigrationgrouptargetsizingComponent', () => {
  let component: MigrationgrouptargetsizingComponent;
  let fixture: ComponentFixture<MigrationgrouptargetsizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationgrouptargetsizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationgrouptargetsizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
