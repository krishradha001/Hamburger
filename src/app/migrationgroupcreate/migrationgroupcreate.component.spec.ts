import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationgroupcreateComponent } from './migrationgroupcreate.component';

describe('MigrationgroupcreateComponent', () => {
  let component: MigrationgroupcreateComponent;
  let fixture: ComponentFixture<MigrationgroupcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationgroupcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationgroupcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
