import { ComponentFixture, TestBed } from '@angular/core/testing';

import { End3NereidComponent } from './end3-nereid.component';

describe('End3NereidComponent', () => {
  let component: End3NereidComponent;
  let fixture: ComponentFixture<End3NereidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ End3NereidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(End3NereidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
