import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationGroupComponent } from './migration-group.component';

describe('MigrationGroupComponent', () => {
  let component: MigrationGroupComponent;
  let fixture: ComponentFixture<MigrationGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
