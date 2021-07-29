import { ComponentFixture, TestBed } from '@angular/core/testing';

import { End4AgarethComponent } from './end4-agareth.component';

describe('End4AgarethComponent', () => {
  let component: End4AgarethComponent;
  let fixture: ComponentFixture<End4AgarethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ End4AgarethComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(End4AgarethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
