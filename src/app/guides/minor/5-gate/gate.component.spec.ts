import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateGuideComponent } from './gate.component';

describe('Minor5GateComponent', () => {
  let component: GateGuideComponent;
  let fixture: ComponentFixture<GateGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GateGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
