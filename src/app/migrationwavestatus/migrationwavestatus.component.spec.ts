import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationwavestatusComponent } from './migrationwavestatus.component';

describe('MigrationwavestatusComponent', () => {
  let component: MigrationwavestatusComponent;
  let fixture: ComponentFixture<MigrationwavestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationwavestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationwavestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
