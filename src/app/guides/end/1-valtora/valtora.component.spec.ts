import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValtoraGuideComponent } from './valtora.component';

describe('End1ValtoraComponent', () => {
  let component: ValtoraGuideComponent;
  let fixture: ComponentFixture<ValtoraGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValtoraGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValtoraGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
