import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordGuideComponent } from './lord.component';

describe('LordGuideComponent', () => {
  let component: LordGuideComponent;
  let fixture: ComponentFixture<LordGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LordGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LordGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
