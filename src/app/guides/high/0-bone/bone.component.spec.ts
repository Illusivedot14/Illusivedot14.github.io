import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneGuideComponent } from './bone.component';

describe('BoneGuideComponent', () => {
  let component: BoneGuideComponent;
  let fixture: ComponentFixture<BoneGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoneGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoneGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
