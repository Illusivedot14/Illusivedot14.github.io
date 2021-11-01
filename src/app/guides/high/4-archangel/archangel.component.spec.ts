import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchangelGuideComponent } from './archangel.component';

describe('High4ArchangelComponent', () => {
  let component: ArchangelGuideComponent;
  let fixture: ComponentFixture<ArchangelGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchangelGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchangelGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
