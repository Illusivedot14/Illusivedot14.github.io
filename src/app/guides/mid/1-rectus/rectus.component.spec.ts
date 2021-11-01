import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectusGuideComponent } from './rectus.component';

describe('RectusGuideComponent', () => {
  let component: RectusGuideComponent;
  let fixture: ComponentFixture<RectusGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectusGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectusGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
