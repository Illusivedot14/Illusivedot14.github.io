import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameGuideComponent } from './flame.component';

describe('FlameGuideComponent', () => {
  let component: FlameGuideComponent;
  let fixture: ComponentFixture<FlameGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlameGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlameGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
