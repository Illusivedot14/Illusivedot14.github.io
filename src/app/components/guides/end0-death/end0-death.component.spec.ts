import { ComponentFixture, TestBed } from '@angular/core/testing';

import { End0DeathComponent } from './end0-death.component';

describe('End0DeathComponent', () => {
  let component: End0DeathComponent;
  let fixture: ComponentFixture<End0DeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ End0DeathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(End0DeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
