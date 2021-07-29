import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor8SoulComponent } from './minor8-soul.component';

describe('Minor8SoulComponent', () => {
  let component: Minor8SoulComponent;
  let fixture: ComponentFixture<Minor8SoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor8SoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor8SoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
