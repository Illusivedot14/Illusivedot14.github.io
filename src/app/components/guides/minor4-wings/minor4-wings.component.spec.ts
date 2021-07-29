import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor4WingsComponent } from './minor4-wings.component';

describe('Minor4WingsComponent', () => {
  let component: Minor4WingsComponent;
  let fixture: ComponentFixture<Minor4WingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor4WingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor4WingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
