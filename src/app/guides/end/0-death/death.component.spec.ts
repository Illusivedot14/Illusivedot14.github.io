import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathGuideComponent } from './death.component';

describe('DeathGuideComponent', () => {
  let component: DeathGuideComponent;
  let fixture: ComponentFixture<DeathGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
