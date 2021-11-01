import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultGuideComponent } from './default.component';

describe('DefaultGuideComponent', () => {
  let component: DefaultGuideComponent;
  let fixture: ComponentFixture<DefaultGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
