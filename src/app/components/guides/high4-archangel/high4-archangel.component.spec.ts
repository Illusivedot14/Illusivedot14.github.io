import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High4ArchangelComponent } from './high4-archangel.component';

describe('High4ArchangelComponent', () => {
  let component: High4ArchangelComponent;
  let fixture: ComponentFixture<High4ArchangelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High4ArchangelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High4ArchangelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
