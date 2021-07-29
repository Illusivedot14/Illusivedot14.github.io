import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mid3TurtleComponent } from './mid3-turtle.component';

describe('Mid3TurtleComponent', () => {
  let component: Mid3TurtleComponent;
  let fixture: ComponentFixture<Mid3TurtleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mid3TurtleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mid3TurtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
