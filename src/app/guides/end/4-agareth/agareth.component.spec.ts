import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgarethGuideComponent } from './agareth.component';

describe('AgarethGuideComponent', () => {
  let component: AgarethGuideComponent;
  let fixture: ComponentFixture<AgarethGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgarethGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgarethGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
