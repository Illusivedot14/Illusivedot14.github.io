import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Subscription } from 'rxjs';
import { Item, Enemy, BossWithRate } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.scss']
})
export class EnemyComponent implements OnInit {
  public enemyID: string = "";
  public enemy!: Enemy;
  public items    : Item[]  = [];
  public stats    : string[]  = [];
  public hasPhase : boolean = false;
  public maxAttack : number = 0;
  public difficulty : number = 1;

  private routeSub!: Subscription;
  private enemySub!: Subscription;
  private itemsSub!: Subscription;

  public possibleStats: any = {
    'health':        {  name: " Health",        color: '#90EE90', value: 0 },
    'healthRegen':   {  name: " Health Regen",  color: '#90EE90', value: 0 },
    'mana':          {  name: " Mana",          color: '#ADD8E6', value: 0 },
    'manaRegen':     {  name: " Mana Regen",    color: '#ADD8E6', value: 0 },
    'armor':         {  name: " Armor",         color: '#D3D3D3', value: 0 },
    'armorType':     {  name: " Armor Type",    color: '#D3D3D3', value: 0 },
    'magicResist':   {  name: " Magic Resist",  color: '#ADD8E6', value: 0 },
    'damageResist':  {  name: " Damage Resist", color: '#FFFF99', value: 0 },
    'attackDamage':  {  name: " Attack Damage", color: '#FF6666', value: 0 },
    'attackSpread':  {  name: " Attack Spread", color: '#FF6666', value: 0 },
    'attackRange':   {  name: " Attack Range",  color: '#FF6666', value: 0 },
    'attackSpeed':   {  name: " Attack Speed",  color: '#FF6666', value: 0 },
    'moveSpeed':     {  name: " Move Speed",    color: '#808080', value: 0 },
  };
  constructor(private _location: Location, private ActivatedRoute: ActivatedRoute, private router: Router, private _enemyService: HttpService) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params : Params) => {
      this.enemyID = decodeURIComponent(params['id']);
      this.getEnemyDetails(this.enemyID);
    })
  }
  getEnemyDetails(id: string): void {
    this.enemySub = this._enemyService.getEnemies().subscribe(data => {
      this.enemy = data.find(x => x.name.includes(id))!;
      this.enemy.color = "#" + this.enemy.color;
      if(this.enemy.stats)
      {
          Object.entries(this.enemy.stats).forEach(entry => {
            const [key, value] = entry;
            if(value != 0)
            {
              this.stats.push(key);
              this.possibleStats[key].value = value;
            }
          });
          this.maxAttack = Number(this.possibleStats['attackDamage'].value) + Number(this.possibleStats['attackSpread'].value)
          this.possibleStats['attackSpeed'].value = Math.round(Number(this.possibleStats['attackSpeed'].value) * 10000) / 10000;
          this.possibleStats['magicResist'].value = Math.round(Number(this.possibleStats['magicResist'].value) * 10000) / 100;
          this.possibleStats['damageResist'].value = Math.round(Number(this.possibleStats['damageResist'].value) * 10000) / 100;
        }
      this.itemsSub = this._enemyService.getItems().subscribe(itemData => { this.items = itemData })
    });
  }
  onInputChange(event: MatSliderChange) {
    let prior = this.difficulty;
    this.difficulty = event.value!;
    
  }
  getBossImageURL(name: string)
  {
    return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(this.findFilename(name)) + '%20Icon.jpg';
  }
  getHealth() : number {
    var health = parseFloat(this.possibleStats['health'].value);
    var difficultyHealth = 0;
    if((this.enemy.category == "Minor" || this.enemy.category == "Mid") && this.enemy.type == "Boss")
    {
      difficultyHealth = this.difficulty <= 5 ? health*.5*(this.difficulty-1) : health*2;
    }
    if((this.enemy.category == "High" || this.enemy.category == "Endgame") && this.enemy.type == "Boss")
    {
      difficultyHealth = this.difficulty > 5 ? health*.2*(this.difficulty-5) : 0;
    }
    return health+difficultyHealth;
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
  openItemDetails(id: string): void {
    this.router.navigate(['item', encodeURIComponent(id)]);
  }
  getItemDroprate(enemy: Enemy, drop: string): string  {
    let item = this.items.find(x => x.name === drop);
    if(item) {
      if(item.droprate[0] == undefined) {
        var displayDrop = parseFloat(item.droprate);
        var difficultyDrop = 0;
        if((enemy.category == "Minor" || enemy.category == "Mid") && enemy.type == "Boss")
        {
          difficultyDrop = this.difficulty <= 5 ? displayDrop*.125*(this.difficulty-1) : displayDrop*.5;
        }
        if((enemy.category == "High" || enemy.category == "Endgame") && enemy.type == "Boss")
        {
          difficultyDrop = this.difficulty > 5 ? displayDrop*.2*(this.difficulty-5) : 0;
        }
        return ' (' + (Math.round((displayDrop + difficultyDrop) * 10000) / 100) + "%)"
      }
      else {
        for(let i = 0; i < item.dropped_by.length; i++) {
          if(item.dropped_by[i] === enemy.name) {
            var displayDrop = parseFloat(item.droprate);
            var difficultyDrop = 0;
            if((enemy.category == "Minor" || enemy.category == "Mid") && enemy.type == "Boss")
            {
              difficultyDrop = this.difficulty <= 5 ? displayDrop*.125*(this.difficulty-1) : displayDrop*.5;
            }
            if((enemy.category == "High" || enemy.category == "Endgame") && enemy.type == "Boss")
            {
              difficultyDrop = this.difficulty > 5 ? displayDrop*.2*(this.difficulty-5) : 0;
            }
            return ' (' + (Math.round((displayDrop + difficultyDrop) * 10000) / 100) + "%)"
          }
        }
      }
    }
    return "";
  }
  
  returnToPrior(): void {
    this._location.back();
  }
}
