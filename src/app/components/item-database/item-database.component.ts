import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Item } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-item-database',
  templateUrl: './item-database.component.html',
  styleUrls: ['./item-database.component.scss']
})
export class ItemDatabaseComponent implements OnInit, OnDestroy {
  public sort!: string;
  public items!: Array<Item>;

  public filterOptions: Record<string, boolean> = {"Armor" : false, "Head" : false, "Accessory" : false, "Weapon" : false, "Wing" : false, "Misc" : false, 
                                                   "Mat" : false, "Food" : false, "Token" : false, "Pickaxe": false, "Icon": false , "Special" : false, "Coin" : false};
  public grade: any = {
  0: {
    name: '',
    color: ''
  },
  1: {
      name: 'Deltirama',
      color: '#C39BE1'
  },
  2: {
      name: 'Neptinos',
      color: '#9BE1E1'
  },
  3: {
      name: 'Gnosis',
      color: '#DC143C'
  },
  4: {
      name: 'Alteia',
      color: '#99FF99'
  }
};

  private routeSub!: Subscription;
  private itemSub!: Subscription;

  constructor(private _itemService : HttpService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params : Params) => {
      if(params['item-search']) { this.getItems('blank', decodeURIComponent(params['item-search'])); }
      else { this.getItems('blank'); }
    });
  }

  getItems(sort: string, search?: string, filterChange?: string): void {

    this.itemSub = this._itemService.getItems().subscribe(data => {
      if(filterChange) { this.toggleOption(filterChange); }
      this.items = data;
      if(search){ this.items = this.items.filter(x => x.name.toUpperCase().includes(search.toUpperCase())); }
      this.items = this.filterItems(this.items);
      this.items = this.sortItems(this.items, sort);
      for(let i = 0; i < this.items.length; i++) { this.items[i] = this.formatItemDetails(this.items[i]); }
    });
  }

  sortItems(items: Item[], sort: string): Item[]
  {
    switch(sort){
      case 'name':
        items.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});
        break;
      case 'grade':
        items.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});

        var noLevel = items.filter(x => x.level == undefined);
        items = items.filter(x => x.level != undefined);
        items.sort((obj1, obj2) => { return +obj1.level - +obj2.level; });
        items = noLevel.concat(items);

        var noGrade = items.filter(x => x.grade == undefined);
        items = items.filter(x => x.grade != undefined);
        items.sort((obj1, obj2) => { return +obj1.grade - +obj2.grade; });
        items = noGrade.concat(items);
        break;
      case 'grade-rev':
        items.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});

        var noLevel = items.filter(x => x.level == undefined);
        items = items.filter(x => x.level != undefined);
        items.sort((obj1, obj2) => { return +obj2.level - +obj1.level; });
        items = items.concat(noLevel);

        var noGrade = items.filter(x => x.grade == undefined);
        items = items.filter(x => x.grade != undefined);
        items.sort((obj1, obj2) => { return +obj2.grade - +obj1.grade; });
        items = items.concat(noGrade);
        break;
      case 'drop':
        items.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});
        items = items.filter(x => x.droprate != undefined);
        items.sort((obj1, obj2) => { return +obj1.droprate - +obj2.droprate; });

        break;
      case 'drop-rev':
        items.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});
        items = items.filter(x => x.droprate != undefined);
        items.sort((obj1, obj2) => { return +obj2.droprate - +obj1.droprate; });
        break;
      default: //do nothing
        break;
    }
    return items;
  }
  filterItems(items: Item[]): Item[] {
    var checkIfButtonPressed = false;
    for(var key in this.filterOptions)
    {
      if(this.filterOptions[key])
      {
        checkIfButtonPressed = true;
      }
    }
    if(!checkIfButtonPressed) return items;
    items = items.filter((item) => {
      for(var key in this.filterOptions)
      {
        if(this.filterOptions[key] && item.type.toUpperCase().includes(key.toUpperCase())) { return true; }
      }
      return false;
    });
    return items;
  }
  formatItemDetails(item : Item): Item {
    item.rank = item.rank == "none" ? "" : item.rank;
    if(item.color) { item.color = '#' + item.color; }
    return item;
  }

  toggleOption(option: string)
  {
    this.filterOptions[option] = option in this.filterOptions ? !this.filterOptions[option] : this.filterOptions[option];
  }
  getFilterNames(filters: Object): string[]
  {
    return Object.keys(filters);
  }

  getItemImageURL(name: string) {
    if(name.includes("Token")) { return 'https://raw.githubusercontent.com/sfarmani/twicons/master/Token.jpg'; }
    if(name.includes("Sealed") && name !== "Sealed Weapon") { name = name.substring(7) }
    const url_name = name.replace(/\s/g, '%20');
    return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + url_name + '.jpg';
  }

  openItemDetails(id: string): void {
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


