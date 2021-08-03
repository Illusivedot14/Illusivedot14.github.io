import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemySpellDisplayComponent } from './enemy-spell-display.component';

describe('EnemySpellDisplayComponent', () => {
  let component: EnemySpellDisplayComponent;
  let fixture: ComponentFixture<EnemySpellDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemySpellDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemySpellDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
