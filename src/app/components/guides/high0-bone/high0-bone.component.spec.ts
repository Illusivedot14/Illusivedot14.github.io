import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High0BoneComponent } from './high0-bone.component';

describe('High0BoneComponent', () => {
  let component: High0BoneComponent;
  let fixture: ComponentFixture<High0BoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High0BoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High0BoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
