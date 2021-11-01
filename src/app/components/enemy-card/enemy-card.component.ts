import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enemy, Item } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'enemy-card',
  templateUrl: './enemy-card.component.html',
  styleUrls: ['./enemy-card.component.scss']
})
export class EnemyCardComponent implements OnInit {
  
  @Input()
  public enemy : Enemy;
  @Input()
  public drops : Item[]  = [];

  constructor(private enemyService : HttpService, private router: Router) { }

  ngOnInit(): void {
  }
  
  getEnemyImageURL(name: string) {
    return this.enemyService.getEnemyImageURL(name);
  }

  getItemImageURL(name: string) {
    let item = this.drops.find(x => x.id === name);
    return item ? this.enemyService.getItemImageURL(item.name) : "ERROR";
  }

  changeItemDisplay(enemy: Enemy, drop: string): void  {
    let item = this.drops.find(x => x.id === drop);
    if(item) {
      enemy.displayDrop = item.name;
      if(item.droprate[0] == undefined) {
        enemy.displayDrop += ' (' + (Math.round(parseFloat(item.droprate) * 10000) / 100) + "%)"
      }
      else {
        for(let i = 0; i < item.dropped_by.length; i++) {
          if(item.dropped_by[i] === enemy.name) {
            enemy.displayDrop += ' (' + (Math.round(parseFloat(item.droprate[i]) * 10000) / 100) + "%)";
            break;
          }
        }
      }
    } else {
      enemy.displayDrop = this.enemy.name;
    }
  }

  openEnemyDetails(id: string): void {
    this.router.navigate(['enemy', encodeURIComponent(id)]);
  }
   
  openItemDetails(id: string): void {
    let item = this.drops.find(x => x.id === id);
    if(item) {
      this.router.navigate(['item', encodeURIComponent(item.name)]);
    }
  }
}
