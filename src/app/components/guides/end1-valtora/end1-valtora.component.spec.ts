import { ComponentFixture, TestBed } from '@angular/core/testing';

import { End1ValtoraComponent } from './end1-valtora.component';

describe('End1ValtoraComponent', () => {
  let component: End1ValtoraComponent;
  let fixture: ComponentFixture<End1ValtoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ End1ValtoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(End1ValtoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
