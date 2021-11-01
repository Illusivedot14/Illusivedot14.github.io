import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WingsGuideComponent } from './wings.component';

describe('WingsGuideComponent', () => {
  let component: WingsGuideComponent;
  let fixture: ComponentFixture<WingsGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WingsGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WingsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
