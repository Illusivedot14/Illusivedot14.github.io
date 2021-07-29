import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor6AngelComponent } from './minor6-angel.component';

describe('Minor6AngelComponent', () => {
  let component: Minor6AngelComponent;
  let fixture: ComponentFixture<Minor6AngelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor6AngelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor6AngelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
