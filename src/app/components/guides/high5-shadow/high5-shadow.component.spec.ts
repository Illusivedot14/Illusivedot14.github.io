import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High5ShadowComponent } from './high5-shadow.component';

describe('High5ShadowComponent', () => {
  let component: High5ShadowComponent;
  let fixture: ComponentFixture<High5ShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High5ShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High5ShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
