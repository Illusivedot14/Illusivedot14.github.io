import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location} from '@angular/common';
import { Subscription } from 'rxjs';
import { Item, Enemy, EnemySkill } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { MatSliderChange } from '@angular/material/slider';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.scss']
})
export class EnemyComponent implements OnInit, OnDestroy {
  public enemyID    : string = "";
  public enemy!     : Enemy;
  public items      : Item[]  = [];
  public skills     : EnemySkill[]  = [];
  public stats      : string[]  = [];
  public hasGuide   : boolean = false;
  public maxAttack  : number = 0;
  public difficulty : number = 1;

  private routeSub!: Subscription;
  private enemySub!: Subscription;
  private enemySpellsSub!: Subscription;
  private itemsSub!: Subscription;


  private lowerDropRateScale = .125;
  private higherDropRateScale = .2;
  private cutOffDropRateScale = 5;

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
  constructor(private _location: Location, private ActivatedRoute: ActivatedRoute, private router: Router, private _enemyService: HttpService, private titleService: Title) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params : Params) => {
      this.enemyID = decodeURIComponent(params['id']);
      this.titleService.setTitle("TWRPG Guidebook | Enemy | " + this.enemyID);
      this.getEnemyDetails(this.enemyID);
    })
  }
  getEnemyDetails(id: string): void {
    this.enemySub = this._enemyService.getEnemies().subscribe(data => {
      this.enemy = data.find(x => x.name == id)!;
      this.enemy.color = "#" + this.enemy.color;
      if(this.enemy.stats) {
          Object.entries(this.enemy.stats).forEach(entry => {
            const [key, value] = entry;
            if(value != 0) {
              this.stats.push(key);
              this.possibleStats[key].value = value;
            }
          });
          this.maxAttack = Number(this.possibleStats['attackDamage'].value) + Number(this.possibleStats['attackSpread'].value)
          this.possibleStats['attackSpeed'].value = Math.round(Number(this.possibleStats['attackSpeed'].value) * 10000) / 10000;
          this.possibleStats['magicResist'].value = Math.round(Number(this.possibleStats['magicResist'].value) * 10000) / 100;
          this.possibleStats['damageResist'].value = Math.round(Number(this.possibleStats['damageResist'].value) * 10000) / 100;
      }
      this.enemySpellsSub = this._enemyService.getEnemySkills().subscribe(skillData => {
        this.skills = skillData.filter(x => x.caster == this.enemy.name || (x.caster[0].length > 1 && x.caster.includes(this.enemy.name)));
        for(let skill of this.skills) {
          skill.color = '#' + skill.color;
        }
      });
    });
    this.itemsSub = this._enemyService.getItems().subscribe(itemData => { this.items = itemData });
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

  openItemDetails(id: string): void {
    this.router.navigate(['item', encodeURIComponent(id)]);
  }

  onInputChange(event: MatSliderChange) {
    this.difficulty = event.value!;
  }
  getHealth() : number {
    var health = parseFloat(this.possibleStats['health'].value);
    var difficultyHealth = 0;
    if((this.enemy.category == "Minor" || this.enemy.category == "Mid"))
    {
      difficultyHealth = this.difficulty <= 5 ? health*.5*(this.difficulty-1) : health*2;
    }
    if((this.enemy.category == "High" || this.enemy.category == "Endgame"))
    {
      difficultyHealth = this.difficulty > 5 ? health*.2*(this.difficulty-5) : 0;
    }
    return health+difficultyHealth;
  }
  getDropRateString(enemy: Enemy, drop: string): string  {
    let item = this.items.find(x => x.name === drop);
    if(item) {
      if(item.droprate[0] == undefined) {
        return this.getDropRate(enemy,item,parseFloat(item.droprate));
      }
      else {
        for(let i = 0; i < item.dropped_by.length; i++) {
          if(item.dropped_by[i] === enemy.name) {
            return this.getDropRate(enemy,item,parseFloat(item.droprate[i]));
          }
        }
      }
    }
    return "";
  }
  getDropRate(enemy: Enemy, item: Item, droprate: number) : string {
    var droprateScale = 0;
    if(item.name.includes("Token") || item.name.includes("Icon") || item.name.includes("Effort")) {
      return ' (' + (Math.round((droprate) * 10000) / 100) + "%)"
    }
    if((enemy.category == "Minor" || enemy.category == "Mid")) {
      droprateScale = this.difficulty <= this.cutOffDropRateScale ? droprate*this.lowerDropRateScale*(this.difficulty-1) : droprate*this.lowerDropRateScale*4;
    }
    if((enemy.category == "High" || enemy.category == "Endgame")) {
      droprateScale = this.difficulty > this.cutOffDropRateScale ? droprate*this.higherDropRateScale*(this.difficulty-5) : 0;
    }
    return ' (' + (Math.round((droprate + droprateScale) * 10000) / 100) + "%)"
  }

  getLocationAsset(name: string) : string
  {
    return "..\..\..\..\assets\img\twrpg_map.png";
  }

  getMinionSpell() : EnemySkill[] {
    return [];
  }
  openMinionDetails(id: string) : void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/enemy/${id}`])
    );
  
    window.open(url, '_blank');
  }
  returnToPrior(): void {
    this._location.back();
  }
  openEnemyDetails(id: string): void {
    this.router.navigate(['enemy', encodeURIComponent(id)]);
  }

  ngOnDestroy(): void {
    if(this.enemySub) {
      this.enemySub.unsubscribe();
    }
    if(this.enemySpellsSub) {
      this.enemySpellsSub.unsubscribe();
    }
    if(this.itemsSub) {
      this.itemsSub.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
