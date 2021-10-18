import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveGroupSectionComponent } from './move-group-section.component';

describe('MoveGroupSectionComponent', () => {
  let component: MoveGroupSectionComponent;
  let fixture: ComponentFixture<MoveGroupSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveGroupSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveGroupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
