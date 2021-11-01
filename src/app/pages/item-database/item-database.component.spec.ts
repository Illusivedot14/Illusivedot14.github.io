import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDatabaseComponent } from './item-database.component';

describe('ItemDatabaseComponent', () => {
  let component: ItemDatabaseComponent;
  let fixture: ComponentFixture<ItemDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
