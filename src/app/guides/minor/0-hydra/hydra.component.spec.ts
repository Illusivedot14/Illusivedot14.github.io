import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydraGuideComponent } from './hydra.component';

describe('HydraComponent', () => {
  let component: HydraGuideComponent;
  let fixture: ComponentFixture<HydraGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydraGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HydraGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
