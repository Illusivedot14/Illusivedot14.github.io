import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClownGuideComponent } from './clown.component';

describe('ClownGuideComponent', () => {
  let component: ClownGuideComponent;
  let fixture: ComponentFixture<ClownGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClownGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClownGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
