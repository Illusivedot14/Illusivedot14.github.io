import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowGuideComponent } from './shadow.component';

describe('ShadowGuideComponent', () => {
  let component: ShadowGuideComponent;
  let fixture: ComponentFixture<ShadowGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
