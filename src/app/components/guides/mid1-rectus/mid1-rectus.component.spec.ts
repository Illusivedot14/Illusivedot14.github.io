import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mid1RectusComponent } from './mid1-rectus.component';

describe('Mid1RectusComponent', () => {
  let component: Mid1RectusComponent;
  let fixture: ComponentFixture<Mid1RectusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mid1RectusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mid1RectusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
