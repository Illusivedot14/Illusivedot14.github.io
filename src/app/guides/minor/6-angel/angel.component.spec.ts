import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelGuideComponent } from './angel.component';

describe('AngelGuideComponent', () => {
  let component: AngelGuideComponent;
  let fixture: ComponentFixture<AngelGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngelGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
