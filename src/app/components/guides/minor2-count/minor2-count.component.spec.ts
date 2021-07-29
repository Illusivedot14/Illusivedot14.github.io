import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor2CountComponent } from './minor2-count.component';

describe('Minor2CountComponent', () => {
  let component: Minor2CountComponent;
  let fixture: ComponentFixture<Minor2CountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor2CountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor2CountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
