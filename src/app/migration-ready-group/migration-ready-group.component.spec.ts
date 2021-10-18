import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationReadyGroupComponent } from './migration-ready-group.component';

describe('MigrationReadyGroupComponent', () => {
  let component: MigrationReadyGroupComponent;
  let fixture: ComponentFixture<MigrationReadyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationReadyGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationReadyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
