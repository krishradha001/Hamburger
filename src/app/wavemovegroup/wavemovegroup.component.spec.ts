import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavemovegroupComponent } from './wavemovegroup.component';

describe('WavemovegroupComponent', () => {
  let component: WavemovegroupComponent;
  let fixture: ComponentFixture<WavemovegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavemovegroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavemovegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
