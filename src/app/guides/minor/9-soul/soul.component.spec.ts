import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulGuideComponent } from './soul.component';

describe('SoulGuideComponent', () => {
  let component: SoulGuideComponent;
  let fixture: ComponentFixture<SoulGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoulGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoulGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
