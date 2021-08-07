import { Component, OnInit } from '@angular/core';
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
export class EnemyDatabaseComponent implements OnInit {

  private routeSub!: Subscription;
  private enemySub!: Subscription;
  private itemsSub!: Subscription;

  public enemies  : Enemy[] = [];
  public enemy_categories : string[] = ["Mobs", "Fields", "Minors", "Mids", "Highs", "Ends"];
  public enemy_list : Enemy[][] = [[], [], [], [], [], []];

  public items : Item[]  = [];


  constructor(private _enemyService : HttpService, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("TWRPG Guidebook | Enemy");
    this.routeSub = this.activatedRoute.params.subscribe((params : Params) => {
      this.getEnemies();
    });
  }
  getEnemies(): void {
    this.enemySub = this._enemyService.getEnemies().subscribe(data => {
      this.enemies = data;
      this.itemsSub = this._enemyService.getItems().subscribe(itemData => { this.items = itemData })
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
  }
  getEnemyImageURL(name: string)
  {
    if(name == "Elemental of Chaos") return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(this._enemyService.getEnemyImageFilename(name)) + '.jpg';
    return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(this._enemyService.getEnemyImageFilename(name)) + '%20Icon.jpg';
  }
  getItemImageURL(name: string)
  {
    if(name.includes("Token"))  {
      return 'https://raw.githubusercontent.com/sfarmani/twicons/master/Token.jpg';
    }
    if(name.includes("Sealed") && name !== "Sealed Weapon") { name = name.substring(7) }
    return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(name) + '.jpg';
  }
  openEnemyDetails(id: string): void {
    this.router.navigate(['enemy', encodeURIComponent(id)]);
  }
  openItemDetails(id: string): void {
    this.router.navigate(['item', encodeURIComponent(id)]);
  }
  
  changeItemDisplay(enemy: Enemy, drop: string): void  {
    enemy.displayDrop = drop;
    let item = this.items.find(x => x.name === drop);
    if(item) {
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
    }
    
  }
}
