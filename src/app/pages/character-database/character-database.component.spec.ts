import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDatabaseComponent } from './character-database.component';

describe('CharacterDatabaseComponent', () => {
  let component: CharacterDatabaseComponent;
  let fixture: ComponentFixture<CharacterDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
