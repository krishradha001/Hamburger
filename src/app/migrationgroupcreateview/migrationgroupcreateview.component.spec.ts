import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationgroupcreateviewComponent } from './migrationgroupcreateview.component';

describe('MigrationgroupcreateviewComponent', () => {
  let component: MigrationgroupcreateviewComponent;
  let fixture: ComponentFixture<MigrationgroupcreateviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationgroupcreateviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationgroupcreateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
