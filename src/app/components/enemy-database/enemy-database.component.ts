import { Component, OnInit } from '@angular/core';
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
  public items    : Item[]  = [];
  public mobs     : Enemy[] = [];
  public fields   : Enemy[] = [];
  public minors   : Enemy[] = [];
  public mids     : Enemy[] = [];
  public highs    : Enemy[] = [];
  public ends     : Enemy[] = [];

  constructor(private _enemyService : HttpService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
        if(enemy.category == "Mob") this.mobs.push(enemy);
        else if(enemy.category == "Field") this.fields.push(enemy);
        else if(enemy.category == "Minor"   && enemy.type == "boss") this.minors.push(enemy);
        else if(enemy.category == "Mid"     && enemy.type == "boss") this.mids.push(enemy);
        else if(enemy.category == "High"    && enemy.type == "boss") this.highs.push(enemy);
        else if(enemy.category == "Endgame" && enemy.type == "boss") this.ends.push(enemy);
      }
    });
  }
  getEnemyImageURL(name: string)
  {
    return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(this.findFilename(name)) + '%20Icon.jpg';
  }
  findFilename(boss_name: string){
    switch(true){
        case /^Troll/ig.test(boss_name): return "Troll";
        case /^Ice Troll/ig.test(boss_name): return "Ice Troll";
        case /^Furbolg/ig.test(boss_name): return "Furbolg";
        case /Murloc/ig.test(boss_name): return "Murloc";
        case /^Polar Bear/ig.test(boss_name): return "Polar Bear";
        case /Duchy of Wallachia Count/ig.test(boss_name): return "Count";
        case /^Duchy of Wallachia/ig.test(boss_name): return "Duchy of Wallachia";
        case /^Lava/ig.test(boss_name): return "Lava";
        case /^(Solid|Stone) Golem/ig.test(boss_name): return "Stone Golem";
        case /Guardian of Sea/ig.test(boss_name): return "Tide Caller";
        case /Mad Clown/ig.test(boss_name): return "Mad Clown";
        case /Hydra/ig.test(boss_name): return "Hydra";
        case /Jack/ig.test(boss_name): return "Jack";
        case /Gatekeeper/ig.test(boss_name): return "Gatekeeper";
        case /Guardian Angel/ig.test(boss_name): return "Guardian Angel";
        case /Corrupt Angel/ig.test(boss_name): return "Corrupt Angel";
        case /Everfrost/ig.test(boss_name): return "Everfrost";
        case /Frostspider Queen/ig.test(boss_name): return "Spider Queen";
        case /Beriel/ig.test(boss_name): return "Demon Lord";
        case /Rectus/ig.test(boss_name): return "Corruptor";
        case /Desperia/ig.test(boss_name): return "Skeleton King";
        case /Samael/ig.test(boss_name): return "Archangel";
        case /Irbert/ig.test(boss_name): return "Shadow Dragon";
        case /Elemental of Chaos/ig.test(boss_name): return "ElementalistF";
        default: return boss_name;
    }
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
    this.router.navigate(['enemy', this.findFilename(encodeURIComponent(id))]);
  }
  openItemDetails(id: string): void {
    this.router.navigate(['item', encodeURIComponent(id)]);
  }
  changeItemDisplay(enemy: Enemy, drop: string): void  {
    enemy.displayDrop = drop;
    if(drop != "" && this.items) {
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
}
