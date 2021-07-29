import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor1JackComponent } from './minor1-jack.component';

describe('Minor1JackComponent', () => {
  let component: Minor1JackComponent;
  let fixture: ComponentFixture<Minor1JackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor1JackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor1JackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
