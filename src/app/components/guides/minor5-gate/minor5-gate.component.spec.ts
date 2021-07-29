import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor5GateComponent } from './minor5-gate.component';

describe('Minor5GateComponent', () => {
  let component: Minor5GateComponent;
  let fixture: ComponentFixture<Minor5GateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor5GateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor5GateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
