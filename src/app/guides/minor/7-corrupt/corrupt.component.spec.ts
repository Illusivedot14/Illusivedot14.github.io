import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorruptGuideComponent } from './corrupt.component';

describe('CorruptGuideComponent', () => {
  let component: CorruptGuideComponent;
  let fixture: ComponentFixture<CorruptGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorruptGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorruptGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
