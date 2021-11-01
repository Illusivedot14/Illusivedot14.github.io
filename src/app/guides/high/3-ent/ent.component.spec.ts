import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntGuideComponent } from './ent.component';

describe('EntGuideComponent', () => {
  let component: EntGuideComponent;
  let fixture: ComponentFixture<EntGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
