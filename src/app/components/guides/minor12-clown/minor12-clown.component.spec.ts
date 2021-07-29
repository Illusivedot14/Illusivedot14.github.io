import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor12ClownComponent } from './minor12-clown.component';

describe('Minor12ClownComponent', () => {
  let component: Minor12ClownComponent;
  let fixture: ComponentFixture<Minor12ClownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor12ClownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor12ClownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
