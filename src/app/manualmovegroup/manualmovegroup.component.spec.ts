import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualmovegroupComponent } from './manualmovegroup.component';

describe('ManualmovegroupComponent', () => {
  let component: ManualmovegroupComponent;
  let fixture: ComponentFixture<ManualmovegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualmovegroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualmovegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
