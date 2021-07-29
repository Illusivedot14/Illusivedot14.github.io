import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor7CorruptComponent } from './minor7-corrupt.component';

describe('Minor7CorruptComponent', () => {
  let component: Minor7CorruptComponent;
  let fixture: ComponentFixture<Minor7CorruptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor7CorruptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor7CorruptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
