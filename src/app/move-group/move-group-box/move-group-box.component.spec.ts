import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveGroupBoxComponent } from './move-group-box.component';

describe('MoveGroupBoxComponent', () => {
  let component: MoveGroupBoxComponent;
  let fixture: ComponentFixture<MoveGroupBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveGroupBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveGroupBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
