import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnemyDatabaseComponent } from './components/enemy-database/enemy-database.component';
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
    path: 'search/:item-search',
    component: ItemDatabaseComponent,
  },
  {
    path: 'item/:id',
    component: ItemComponent,
  },
  {
    path: 'enemy',
    component: EnemyDatabaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
