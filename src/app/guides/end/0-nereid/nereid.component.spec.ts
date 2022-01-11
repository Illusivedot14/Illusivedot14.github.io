import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NereidGuideComponent } from './nereid.component';

describe('NereidGuideComponent', () => {
  let component: NereidGuideComponent;
  let fixture: ComponentFixture<NereidGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NereidGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NereidGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
