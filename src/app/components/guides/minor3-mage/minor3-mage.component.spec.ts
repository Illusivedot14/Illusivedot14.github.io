import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor3MageComponent } from './minor3-mage.component';

describe('Minor3MageComponent', () => {
  let component: Minor3MageComponent;
  let fixture: ComponentFixture<Minor3MageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor3MageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor3MageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
