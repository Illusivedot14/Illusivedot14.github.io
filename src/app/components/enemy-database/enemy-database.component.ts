import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Enemy } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-enemy-database',
  templateUrl: './enemy-database.component.html',
  styleUrls: ['./enemy-database.component.scss']
})
export class EnemyDatabaseComponent implements OnInit {

  private routeSub!: Subscription;
  private enemySub!: Subscription;

  public enemies  : Enemy[] = [];
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
      this.mobs   = this.enemies.filter(x => x.category == "Mob");
      this.fields = this.enemies.filter(x => x.category == "Field");
      this.minors = this.enemies.filter(x => x.category == "Minor" && x.type == "boss");
      this.mids   = this.enemies.filter(x => x.category == "Mid" && x.type == "boss");
      this.highs  = this.enemies.filter(x => x.category == "High" && x.type == "boss");
      this.ends   = this.enemies.filter(x => x.category == "Endgame" && x.type == "boss");
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
  changeItemDisplay(category: string, e: number, index: number): void  {
    switch(category){
      case("minor"):
        if(index == -1) this.minors[e].displayDrop = "";
        else this.minors[e].displayDrop = this.minors[e].drops[index] +' ' + (Math.round(parseFloat(this.minors[e].droprates[index]) * 10000) / 100) + "%";
        break;
      case("mid"):
        if(index == -1) this.mids[e].displayDrop = "";
        else this.mids[e].displayDrop = this.mids[e].drops[index] +' ' + (Math.round(parseFloat(this.mids[e].droprates[index]) * 10000) / 100) + "%";
        break;
      case("high"):
        if(index == -1) this.highs[e].displayDrop = "";
        else this.highs[e].displayDrop = this.highs[e].drops[index] +' ' + (Math.round(parseFloat(this.highs[e].droprates[index]) * 10000) / 100) + "%";
        break;
      case("end"):
        if(index == -1) this.ends[e].displayDrop = "";
        else this.ends[e].displayDrop = this.ends[e].drops[index] +' ' + (Math.round(parseFloat(this.ends[e].droprates[index]) * 10000) / 100) + "%";
        break;
    }
  }
}
