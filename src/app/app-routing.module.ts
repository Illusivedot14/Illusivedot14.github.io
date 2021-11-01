import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnemyDatabaseComponent } from './pages/enemy-database/enemy-database.component';
import { EnemyComponent } from './pages/enemy/enemy.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemDatabaseComponent } from './pages/item-database/item-database.component';
import { ItemComponent } from './pages/item/item.component';

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
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
