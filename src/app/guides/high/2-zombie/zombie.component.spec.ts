import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZombieGuideComponent } from './zombie.component';

describe('DefaultGuideComponent', () => {
  let component: ZombieGuideComponent;
  let fixture: ComponentFixture<ZombieGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZombieGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZombieGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
