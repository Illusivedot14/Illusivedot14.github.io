import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfritGuideComponent } from './ifrit.component';

describe('IfritGuideComponent', () => {
  let component: IfritGuideComponent;
  let fixture: ComponentFixture<IfritGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfritGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfritGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
