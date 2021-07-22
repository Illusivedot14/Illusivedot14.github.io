import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyDatabaseComponent } from './enemy-database.component';

describe('EnemyDatabaseComponent', () => {
  let component: EnemyDatabaseComponent;
  let fixture: ComponentFixture<EnemyDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
