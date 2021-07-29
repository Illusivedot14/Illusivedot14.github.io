import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High1SkeletonComponent } from './high1-skeleton.component';

describe('High1SkeletonComponent', () => {
  let component: High1SkeletonComponent;
  let fixture: ComponentFixture<High1SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High1SkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High1SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
