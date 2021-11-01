import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonGuideComponent } from './skeleton.component';

describe('SkeletonGuideComponent', () => {
  let component: SkeletonGuideComponent;
  let fixture: ComponentFixture<SkeletonGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
