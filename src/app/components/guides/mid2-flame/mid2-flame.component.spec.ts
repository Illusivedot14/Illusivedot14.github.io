import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mid2FlameComponent } from './mid2-flame.component';

describe('Mid2FlameComponent', () => {
  let component: Mid2FlameComponent;
  let fixture: ComponentFixture<Mid2FlameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mid2FlameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mid2FlameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
