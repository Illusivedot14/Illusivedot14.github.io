import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnemyDatabaseComponent } from './components/enemy-database/enemy-database.component';
import { EnemyComponent } from './components/enemy/enemy.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDatabaseComponent } from './components/item-database/item-database.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'item',
    component: ItemDatabaseComponent,
  },
  {
    path: 'item/:id',
    component: ItemComponent,
  },
  {
    path: 'item/search/:item-search',
    component: ItemDatabaseComponent,
  },
  {
    path: 'enemy',
    component: EnemyDatabaseComponent,
  },
  {
    path: 'enemy/:id',
    component: EnemyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
