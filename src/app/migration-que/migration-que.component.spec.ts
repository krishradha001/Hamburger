import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationQueComponent } from './migration-que.component';

describe('MigrationQueComponent', () => {
  let component: MigrationQueComponent;
  let fixture: ComponentFixture<MigrationQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationQueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
