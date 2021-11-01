import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Enemy, Item } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-enemy-database',
  templateUrl: './enemy-database.component.html',
  styleUrls: ['./enemy-database.component.scss']
})
export class EnemyDatabaseComponent implements OnInit, OnDestroy {

  private routeSub!: Subscription;
  private enemySub!: Subscription;
  private itemsSub!: Subscription;

  public enemies  : Enemy[] = [];
  public enemy_categories : string[] = ["Mobs", "Fields", "Minors", "Mids", "Highs", "Ends"];
  public enemy_list : Enemy[][] = [[], [], [], [], [], []];

  public items : Item[]  = [];


  constructor(private enemyService : HttpService, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("TWRPG Guidebook | Enemy");
    this.routeSub = this.activatedRoute.params.subscribe((params : Params) => {
      this.getEnemies();
    });
  }
  getEnemies(): void {
    this.enemySub = this.enemyService.getEnemies().subscribe(data => {
      this.enemies = data;
      for(let enemy of this.enemies)
      {
        if(enemy.type == "Minion" || enemy.type == "Mechanic") continue;
        enemy.color = "#" + enemy.color;
        enemy.displayDrop = '';
        if(enemy.category == "Creep" || enemy.type == "Mob") this.enemy_list[0].push(enemy);
        else if(enemy.category == "Field")                   this.enemy_list[1].push(enemy);
        else if(enemy.category == "Minor")                   this.enemy_list[2].push(enemy);
        else if(enemy.category == "Mid")                     this.enemy_list[3].push(enemy);
        else if(enemy.category == "High")                    this.enemy_list[4].push(enemy);
        else if(enemy.category == "Endgame")                 this.enemy_list[5].push(enemy);
      }
    });
    this.itemsSub = this.enemyService.getItems().subscribe(itemData => { this.items = itemData });
  }
  getBossDropsInfo(drops: string[]): Item[] {
    let droppedItems = [];
    if(drops) {
      for(let drop of drops) {
        let item = this.items.find(x => x.id === drop);
        if(item) droppedItems.push(item);
      }
    }
    return droppedItems;
  }
  ngOnDestroy(): void {
    if(this.enemySub) {
      this.enemySub.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if(this.itemsSub) {
      this.itemsSub.unsubscribe();
    }
  }
}
