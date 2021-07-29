import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minor9SpiderComponent } from './minor9-spider.component';

describe('Minor9SpiderComponent', () => {
  let component: Minor9SpiderComponent;
  let fixture: ComponentFixture<Minor9SpiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minor9SpiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minor9SpiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
