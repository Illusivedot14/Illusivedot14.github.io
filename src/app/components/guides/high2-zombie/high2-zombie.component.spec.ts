import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High2ZombieComponent } from './high2-zombie.component';

describe('High2ZombieComponent', () => {
  let component: High2ZombieComponent;
  let fixture: ComponentFixture<High2ZombieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High2ZombieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High2ZombieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
