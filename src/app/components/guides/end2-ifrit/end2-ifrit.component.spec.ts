import { ComponentFixture, TestBed } from '@angular/core/testing';

import { End2IfritComponent } from './end2-ifrit.component';

describe('End2IfritComponent', () => {
  let component: End2IfritComponent;
  let fixture: ComponentFixture<End2IfritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ End2IfritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(End2IfritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
