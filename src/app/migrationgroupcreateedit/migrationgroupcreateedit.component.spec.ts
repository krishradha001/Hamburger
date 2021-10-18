import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationgroupcreateeditComponent } from './migrationgroupcreateedit.component';

describe('MigrationgroupcreateeditComponent', () => {
  let component: MigrationgroupcreateeditComponent;
  let fixture: ComponentFixture<MigrationgroupcreateeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationgroupcreateeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationgroupcreateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
