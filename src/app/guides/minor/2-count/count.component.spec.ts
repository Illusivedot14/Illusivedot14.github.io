import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountGuideComponent } from './count.component';

describe('CountGuideComponent', () => {
  let component: CountGuideComponent;
  let fixture: ComponentFixture<CountGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
