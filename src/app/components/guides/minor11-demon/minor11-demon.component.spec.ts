import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor11DemonComponent } from './minor11-demon.component';

describe('Minor11DemonComponent', () => {
  let component: Minor11DemonComponent;
  let fixture: ComponentFixture<Minor11DemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor11DemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor11DemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
