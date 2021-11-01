import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'item-database',
  templateUrl: './item-database.component.html',
  styleUrls: ['./item-database.component.scss']
})
export class ItemDatabaseComponent implements OnInit, OnDestroy {

  public sort: string = "";
  public search: string = "";

  private items: Array<Item> = [];
  public displayedItems: Array<Item> = [];

  public filterOptions: Record<string, boolean> = { 
    "Armor" : false, 
    "Head" : false, 
    "Accessory" : false, 
    "Weapon" : false, 
    "Wing" : false, 
    "Misc" : false, 
    "Mat" : false, 
    "Food" : false, 
    "Token" : false, 
    "Pickaxe": false, 
    "Icon": false , 
    "Special" : false, 
    "Coin" : false
  };


  private routeSub!: Subscription;
  private itemSub!: Subscription;

  constructor(private itemService : HttpService, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("TWRPG Guidebook | Item");
    this.routeSub = this.activatedRoute.params.subscribe((params : Params) => {
      this.search = params['item-search'] ? decodeURIComponent(params['item-search']) : '';
      this.getItems();
    });
  }

  getItems(): void {
    this.itemSub = this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.selectItemsToDisplay('');
    });
  }
  
  selectItemsToDisplay(sort: string) {
    this.displayedItems = this.search == '' ? this.items : this.items.filter(x => x.name.toUpperCase().includes(this.search.toUpperCase()));
    this.filterDisplayedItems();
    this.sortDisplayedItems(sort);
  }

  filterDisplayedItems(): void {
    if(this.isAnyFilterButtonPressed()) {
      this.displayedItems = this.displayedItems.filter((item) => {
        for(var key in this.filterOptions) {
          if(this.filterOptions[key] && item.type.toUpperCase().includes(key.toUpperCase())) { return true; }
        }
        return false;
      });
    }
  }

  isAnyFilterButtonPressed() : boolean {
    var isFilterButtonPressed = false;

    for(var key in this.filterOptions) {
      if(this.filterOptions[key]) {
        isFilterButtonPressed = true;
      }
    }
    return isFilterButtonPressed;
  }

  getFilterNames(filters: Object): string[] {
    return Object.keys(filters);
  }
  
  toggleFilters(options: string) {
    Object.keys(this.filterOptions).forEach(key => {
        this.filterOptions[key] = options.includes(key);
    });
    this.selectItemsToDisplay(this.sort);
  }

  sortDisplayedItems(sort: string): void
  {
    switch(sort){
      case 'name':
        this.displayedItems.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});
        break;
      case 'grade':
        this.displayedItems.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});

        var noLevel = this.displayedItems.filter(x => x.level == undefined);
        this.displayedItems = this.displayedItems.filter(x => x.level != undefined);
        this.displayedItems.sort((obj1, obj2) => { return +obj1.level - +obj2.level; });
        this.displayedItems = noLevel.concat(this.displayedItems);

        var noGrade = this.displayedItems.filter(x => x.grade == undefined);
        this.displayedItems = this.displayedItems.filter(x => x.grade != undefined);
        this.displayedItems.sort((obj1, obj2) => { return +obj1.grade - +obj2.grade; });
        this.displayedItems = noGrade.concat(this.displayedItems);
        break;
      case 'grade-rev':
        this.displayedItems.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});

        var noLevel = this.displayedItems.filter(x => x.level == undefined);
        this.displayedItems = this.displayedItems.filter(x => x.level != undefined);
        this.displayedItems.sort((obj1, obj2) => { return +obj2.level - +obj1.level; });
        this.displayedItems = this.displayedItems.concat(noLevel);

        var noGrade = this.displayedItems.filter(x => x.grade == undefined);
        this.displayedItems = this.displayedItems.filter(x => x.grade != undefined);
        this.displayedItems.sort((obj1, obj2) => { return +obj2.grade - +obj1.grade; });
        this.displayedItems = this.displayedItems.concat(noGrade);
        break;
      case 'drop':
        this.displayedItems.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});
        this.displayedItems = this.displayedItems.filter(x => x.droprate != undefined);
        this.displayedItems.sort((obj1, obj2) => { return +obj1.droprate - +obj2.droprate; });

        break;
      case 'drop-rev':
        this.displayedItems.sort((obj1, obj2) => { return obj1.name.localeCompare(obj2.name);});
        this.displayedItems = this.displayedItems.filter(x => x.droprate != undefined);
        this.displayedItems.sort((obj1, obj2) => { return +obj2.droprate - +obj1.droprate; });
        break;
      default: //do nothing
        break;
    }
  }


  ngOnDestroy(): void {
    if(this.itemSub) {
      this.itemSub.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}


