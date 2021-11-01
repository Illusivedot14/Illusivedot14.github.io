import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritGuideComponent } from './spirit.component';

describe('SpiritGuideComponent', () => {
  let component: SpiritGuideComponent;
  let fixture: ComponentFixture<SpiritGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
