import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonGuideComponent } from './demon.component';

describe('DemonGuideComponent', () => {
  let component: DemonGuideComponent;
  let fixture: ComponentFixture<DemonGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
