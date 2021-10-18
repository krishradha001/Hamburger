import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveGroupViewComponent } from './move-group-view.component';

describe('MoveGroupViewComponent', () => {
  let component: MoveGroupViewComponent;
  let fixture: ComponentFixture<MoveGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveGroupViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
