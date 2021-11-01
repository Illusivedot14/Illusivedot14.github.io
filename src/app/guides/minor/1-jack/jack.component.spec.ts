import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackGuideComponent } from './jack.component';

describe('JackGuideComponent', () => {
  let component: JackGuideComponent;
  let fixture: ComponentFixture<JackGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
