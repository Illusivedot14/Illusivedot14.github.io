import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderGuideComponent } from './spider.component';

describe('SpiderGuideComponent', () => {
  let component: SpiderGuideComponent;
  let fixture: ComponentFixture<SpiderGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiderGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiderGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
