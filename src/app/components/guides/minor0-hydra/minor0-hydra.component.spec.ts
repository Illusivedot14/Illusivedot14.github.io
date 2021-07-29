import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor0HydraComponent } from './minor0-hydra.component';

describe('Minor0HydraComponent', () => {
  let component: Minor0HydraComponent;
  let fixture: ComponentFixture<Minor0HydraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor0HydraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor0HydraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
