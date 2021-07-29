import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mid0SpiritComponent } from './mid0-spirit.component';

describe('Mid0SpiritComponent', () => {
  let component: Mid0SpiritComponent;
  let fixture: ComponentFixture<Mid0SpiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mid0SpiritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mid0SpiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
