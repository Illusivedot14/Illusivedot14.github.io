import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor10LordComponent } from './minor10-lord.component';

describe('Minor10LordComponent', () => {
  let component: Minor10LordComponent;
  let fixture: ComponentFixture<Minor10LordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor10LordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor10LordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
