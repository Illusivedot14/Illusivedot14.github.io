import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtleGuideComponent } from './turtle.component';

describe('TurtleGuideComponent', () => {
  let component: TurtleGuideComponent;
  let fixture: ComponentFixture<TurtleGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurtleGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
