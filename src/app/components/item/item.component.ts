import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Subscription } from 'rxjs';
import { Item, RecipeWithOptions, BossWithRate } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {
  public itemID: string = "";
  public item!: Item;
  //move these two to some globals
  public grade: any = {
    0: { name: '',          color: '' },
    1: { name: 'Deltirama', color: '#C39BE1' },
    2: { name: 'Neptinos',  color: '#9BE1E1' },
    3: { name: 'Gnosis',    color: '#DC143C' },
    4: { name: 'Alteia',    color: '#99FF99' }
  };
  public possibleStats: any = {
    'damage':                {  name: " Damage",                   color: '#ff8c00', value: 0 },
    'aadamagepercent':       {  name: "% Auto Attack Damage",      color: '#ff8c00', value: 0 },
    'armor':                 {  name: " Armor",                    color: '#ff8c00', value: 0 },
    'mainstat':              {  name: " Main Stat",                color: '#ff8c00', value: 0 },
    'allstat':               {  name: " All Stat",                 color: '#ff8c00', value: 0 },
    'str':                   {  name: " Strength",                 color: '#ff8c00', value: 0 },
    'agi':                   {  name: " Agility",                  color: '#ff8c00', value: 0 },
    'int':                   {  name: " Intelligence",             color: '#ff8c00', value: 0 },
    'hp':                    {  name: " Health",                   color: '#ff8c00', value: 0 },
    'mp':                    {  name: " Mana",                     color: '#ff8c00', value: 0 },
    'attackspeedpercent':    {  name: "% Attack Speed",            color: '#ff8c00', value: 0 },
    'movespeed':             {  name: " Movement Speed",           color: '#ff8c00', value: 0 },
    'movespeedpercent':      {  name: "% Movement Speed",          color: '#ff8c00', value: 0 },
    'dodgechancepercent':    {  name: "% Dodge Chance",            color: '#40e0d0', value: 0 },
    'skilldamagepercent':    {  name: "% Skill Damage",            color: '#40e0d0', value: 0 },
    'critchancepercent':     {  name: "% Critical Chance",         color: '#40e0d0', value: 0 },
    'critmultiplier':        {  name: "x Critical Multiplier",     color: '#40e0d0', value: 0 },
    'periodicdamagepercent': {  name: "% Periodic Damage",         color: '#ff1493', value: 0 },
    'mdpercent':             {  name: "% Magic Defense",           color: '#40e0d0', value: 0 },
    'drpercent':             {  name: "% Damage Reduction",        color: '#40e0d0', value: 0 },
    'dtpercent':             {  name: "% Damage Taken",            color: '#40e0d0', value: 0 },
    'dt':                    {  name: " Damage Taken",             color: '#40e0d0', value: 0 },
    'damagedealtpercent':    {  name: "% Damage Dealt",            color: '#ff8c00', value: 0 },
    'healingpercent':        {  name: "% Healing Done",            color: '#ff8c00', value: 0 },
    'healreceivedpercent':   {  name: "% Healing Received",        color: '#ff1493', value: 0 },
    'hpregen':               {  name: " HP Regen",                 color: '#40e0d0', value: 0 },
    'mpregen':               {  name: " MP Regen",                 color: '#40e0d0', value: 0 },
    'affinityiwpercent':     {  name: "% Ice/Water Affinity",      color: '#bae0fc', value: 0 },
    'affinityflamepercent':  {  name: "% Flame Affinity",          color: '#f8ae9c', value: 0 },
    'affinityearthpercent':  {  name: "% Earth Affinity",          color: '#dfbf9f', value: 0 },
    'affinitywlpercent':     {  name: "% Wind/Lightning Affinity", color: '#b5fbba', value: 0 },
    'expgainpercent':        {  name: "% Exp Gain",                color: '#40e0d0', value: 0 },
    'revivaltimepercent':    {  name: "% Revival Time",            color: '#40e0d0', value: 0 },
  };
  public recipe:  Array<RecipeWithOptions> = [];
  public stats:   Array<string> = [];
  public active:  Array<string> = [];
  public passive: Array<string> = [];
  public spec:    Array<string> = [];
  public notes:   Array<string> = [];
  public rates:   Array<BossWithRate> = [];
  routeSub!: Subscription;
  itemSub!: Subscription;
  public display: string = "Used In";

  constructor(private _location: Location, private ActivatedRoute: ActivatedRoute, private router: Router, private _itemService: HttpService) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params : Params) => {
      this.itemID = decodeURIComponent(params['id']);
      this.getItemDetails(this.itemID);
    })
  }

  getItemDetails(id: string): void {
    this.itemSub = this._itemService.getItems().subscribe(data => {
      this.item = data.find(x => x.name.localeCompare(id) == 0)!;
      this.item = this.formatItemDetails(this.item);
      this.recipe   = [];
      this.stats    = [];
      this.active   = [];
      this.passive  = [];
      this.spec     = [];
      this.notes    = [];
      this.rates    = [];
      if(this.item.recipe)
      {
        for(let ingredient of this.item.recipe){
          this.recipe.push(this.convertRecipe(ingredient));
        }
      }
      if(this.item.stats)
      {
          Object.entries(this.item.stats).forEach(entry => {
            const [key, value] = entry;
            this.passive = key == "passive" ? value : this.passive;
            this.active  = key == "active"  ? value : this.active;
            this.spec    = key == "spec"    ? value : this.spec;
            if(!(key == "passive" || key == "active" || key == "spec")) {
              this.stats.push(key);
              this.possibleStats[key].value = value;
              if(key.includes("percent")) this.possibleStats[key].value = Math.round(value * 10000) / 100;
              this.possibleStats[key].value = Number(value) > 0 ? '+' + this.possibleStats[key].value : this.possibleStats[key].value;
            }
          });
      }
      if(this.item.droprate)
      {
        if(this.item.droprate[0] == undefined)
        {
          for(let boss of this.item.dropped_by)
          {
            this.rates.push(this.convertBoss(boss, (Math.round(parseFloat(this.item.droprate) * 10000) / 100) ));
          }
        }
        else
        {
          for(let i = 0; i < this.item.dropped_by.length; i++)
          {
            this.rates.push(this.convertBoss(this.item.dropped_by[i], (Math.round(parseFloat(this.item.droprate[i]) * 10000) / 100)));
          }
        }
      }
    });
  }


  formatItemDetails(item : Item): Item {
    item.rank = item.rank == "none" ? "" : item.rank;
    item.color = '#' + item.color;
    return item;
  }
  incrementIndex(index: number, max: number): number {
    return index < max-1 ? index + 1: 0;
  }
  changeItemDisplay(name: string): void  {
    this.display = name;
  }
  convertRecipe(item: Object): RecipeWithOptions {
    var listOfNames = Object.keys(item);
    var listOfAmounts = Object.values(item);
    return { currentIndex: 0, name: listOfNames, amount: listOfAmounts};
  }
  convertBoss(name: string, rate: number): BossWithRate {
    return {name : name, rate : rate};
  }
  getBossImageURL(name: string)
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
  returnToPrior(): void {
      this._location.back();
  }
  openItemDetails(id: string): void {
    this.recipe = [];
    this.router.navigate(['item', encodeURIComponent(id)]);
  }
  ngOnDestroy(): void {
    if(this.itemSub)
    {
      this.itemSub.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}