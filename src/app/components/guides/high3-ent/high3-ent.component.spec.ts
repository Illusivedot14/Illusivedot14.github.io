import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High3EntComponent } from './high3-ent.component';

describe('High3EntComponent', () => {
  let component: High3EntComponent;
  let fixture: ComponentFixture<High3EntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High3EntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High3EntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
