import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  public enemy!     : Enemy;
  public items      : Item[]  = [];
  public skills : Record<string, EnemySkill[]> = {};
  private exclusionList : string[] = [];
  

  private routeSub!: Subscription;
  private enemySub!: Subscription;
  private enemySpellsSub!: Subscription;
  private itemsSub!: Subscription;

  public difficulty           : number = 1;
  private lowerDropRateScale  : number = .125;
  private midDropRateScale    : number = .05;
  private higherDropRateScale : number = .2;
  private cutOffDropRateScale : number = 5;

  public displayedStats: string[] = ["health", "mana", "attackDamage", "attackRange", "armor", "moveSpeed", "magicResist", "damageResist"];
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
  
  constructor(private ActivatedRoute: ActivatedRoute, private router: Router, private _enemyService: HttpService, private titleService: Title) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params : Params) => {
      const enemyID = decodeURIComponent(params['id']);
      this.titleService.setTitle("TWRPG Guidebook | Enemy | " + enemyID);
      this.getEnemyDetails(enemyID);
    })
  }
  getEnemyDetails(id: string): void {
    this.enemySub = this._enemyService.getEnemies().subscribe(data => {
      this.enemy = data.find(x => x.name == id)!;
      if(!this.enemy) {
        this.redirectToDatabase();
      }

      this.formatEnemyStats();
      this.getEnemySpells();
    });
    this.itemsSub = this._enemyService.getItems().subscribe(itemData => { this.items = itemData });
  }
  
  formatEnemyStats() {
    this.enemy.color = "#" + this.enemy.color;
    if(this.enemy.stats) {
        Object.entries(this.enemy.stats).forEach(entry => {
          const [key, value] = entry;
          if(value != 0) {
            this.possibleStats[key].value = value;
          }
        });
        this.possibleStats['attackSpeed'].value = Math.round(Number(this.possibleStats['attackSpeed'].value) * 10000) / 10000;
        this.possibleStats['magicResist'].value = Math.round(Number(this.possibleStats['magicResist'].value) * 10000) / 100;
        this.possibleStats['damageResist'].value = Math.round(Number(this.possibleStats['damageResist'].value) * 10000) / 100;
    }
  }

  getEnemySpells() {
    this.enemySpellsSub = this._enemyService.getEnemySkills().subscribe(skillData => {
      this.skills[this.enemy.name] = skillData.filter(x => x.caster == this.enemy.name || (x.caster[0].length > 1 && x.caster.includes(this.enemy.name)));
      if(this.enemy.minions)
      {
        for(let minion of this.enemy.minions)
        {
          this.skills[minion] = skillData.filter(x => x.caster == minion || (x.caster[0].length > 1 && x.caster.includes(minion)));
          for(let minionSkill of this.skills[minion]) {
            minionSkill.color = minionSkill.color[0] == '#' ? minionSkill.color : '#' + minionSkill.color;
          }
        }
      }
      for(let skill of this.skills[this.enemy.name]) {
        skill.color = skill.color[0] == '#' ? skill.color : '#' + skill.color;
      }
    });
  }

  getEnemyImageURL(name: string) {
    return this._enemyService.getEnemyImageURL(name);
  }

  getItemImageURL(name: string) {
    let item = this.items.find(x => x.id === name);
    return item ? this._enemyService.getItemImageURL(item.name) : "ERROR";
  }

  getSkills(skillList: EnemySkill[], names: string[]) : EnemySkill[] {
    if(skillList)
    {
      for(let i = 0; i < names.length; i++){
        names[i] = decodeURI(names[i]);
        if(!this.exclusionList.includes(names[i]))
          this.exclusionList.push(names[i]);
      }
      let result = skillList.filter(x => names.includes(x.name));
      return result;
    }
    return [];
  }
  
  getRemainingSkills(skillList: EnemySkill[]) : EnemySkill[] {
    return skillList.filter(x => !this.exclusionList.includes(x.name));
  }
  
  getLocationAsset(name: string) : string {
    return "../../../assets/img/background/twrpg_map.png";
  }

  getStatImage(id: string) : string {
    if(id != "armor") return "../../../assets/img/stats/" + id + ".png"
    switch(true){
      case /^Medium/ig.test(this.possibleStats['armorType'].value): return "../../../assets/img/stats/armor/medium.png";
      case /^Heavy/ig.test(this.possibleStats['armorType'].value):  return "../../../assets/img/stats/armor/heavy.png";
      case /^Hero/ig.test(this.possibleStats['armorType'].value):   return "../../../assets/img/stats/armor/hero.png";
      default: return "../../../assets/img/stats/armor/light.png";
    }
  }

  getStatString(id: string) : string {
    let attackSpread = Number(this.possibleStats['attackDamage'].value) + Number(this.possibleStats['attackSpread'].value);
    switch(true){
      case /^health/ig.test(id):       
      return this.getHealth(this.possibleStats[id].value) + " HP\n(" + this.possibleStats['healthRegen'].value + " HP/s)";
      case /^mana/ig.test(id):         
      return this.possibleStats[id].value + " MP\n(" + this.possibleStats['manaRegen'].value + " MP/s)";
      case /^attackDamage/ig.test(id): return this.possibleStats[id].value + " - " + attackSpread + " ATK\n(" + this.possibleStats['attackSpeed'].value + " ATK/s)";
      case /^attackRange/ig.test(id):  return this.possibleStats[id].value + " Range";
      case /^armor/ig.test(id):        return this.possibleStats[id].value + " Armor";
      case /^moveSpeed/ig.test(id):    return this.possibleStats[id].value + " Movespeed";
      case /^magicResist/ig.test(id):  return this.possibleStats[id].value + "% Magic DEF";
      case /^damageResist/ig.test(id): return this.possibleStats[id].value + "% Damage DEF";
      default: return "DOES NOT EXIST";
    }
  }

  getItemNameString(id: string) : string {
    let item = this.items.find(x => x.id === id);
    if(item) {
      return item.name;
    }
    return id;
  }

  statSpecial(id : string) : void {
    //BD, SB, ZL, AE, SM, Valt, Nereid, Aga
    
  }

  onInputChange(event: MatSliderChange) {
    this.difficulty = event.value!;
  }
//Difficulty bonus 25% HP / 12.5% drop rate per player from 2 ~ 5 → 40% HP / 5% drop rate per player from 4 ~ 8
  getHealth(hp: any) : number {
    var health = parseFloat(hp);
    var difficultyHealth = 0;
    if((this.enemy.category == "Minor")) {
      difficultyHealth = this.difficulty <= 5 ? health*.5*(this.difficulty-1) : health*2;
    }
    else if(this.enemy.category == "Mid") {
        difficultyHealth = this.difficulty > 3 ? health*.40*(this.difficulty-3) : 0;
        difficultyHealth = this.difficulty > 8 ? health*2 : difficultyHealth;
    }
    else if((this.enemy.category == "Late" || this.enemy.category == "High" || this.enemy.category == "Endgame")) {
      difficultyHealth = this.difficulty > 5 ? health*.2*(this.difficulty-5) : 0;
    }
    return health+difficultyHealth;
  }

  getDropRateString(enemy: Enemy, drop: string): string  {
    let item = this.items.find(x => x.id === drop);
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
    if(enemy.category == "Minor") {
      droprateScale = this.difficulty <= this.cutOffDropRateScale ? droprate*this.lowerDropRateScale*(this.difficulty-1) : droprate*this.lowerDropRateScale*4;
    }
    else if(enemy.category == "Mid") {
      droprateScale = this.difficulty > 3 ? droprate*this.midDropRateScale*(this.difficulty-3) : 0;
      droprateScale = this.difficulty > 8 ? droprate*this.midDropRateScale*5: droprateScale;
    }
    else if((this.enemy.category == "Late" || enemy.category == "High" || enemy.category == "Endgame")) {
      droprateScale = this.difficulty > this.cutOffDropRateScale ? droprate*this.higherDropRateScale*(this.difficulty-5) : 0;
    }
    return ' (' + (Math.round((droprate + droprateScale) * 10000) / 100) + "%)"
  }

  openMinionDetails(id: string) : void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/enemy/${id}`])
    );
  
    window.open(url, '_blank');
  }

  openEnemyDetails(id: string): void {
    this.router.navigate(['enemy', encodeURIComponent(id)]);
  }
  
  openItemDetails(id: string): void {
    let item = this.items.find(x => x.id === id);
    if(item) {
      this.router.navigate(['item', encodeURIComponent(item.name)]);
    }
  }
  
  redirectToDatabase(): void {
    this.router.navigate(['enemy']);
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
