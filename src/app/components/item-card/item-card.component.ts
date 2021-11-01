import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  
  @Input()
  item: Item;

  public grade: any = {
    0: { name: '',          color: '' },
    1: { name: 'Deltirama', color: '#C39BE1' },
    2: { name: 'Neptinos',  color: '#9BE1E1' },
    3: { name: 'Gnosis',    color: '#DC143C' },
    4: { name: 'Alteia',    color: '#99FF99' },
    5: { name: 'Arcana',    color: '#733CBE'}
  };

  constructor(private itemService : HttpService, private router: Router) { }

  ngOnInit(): void {
    this.formatItemDetails();
  }

  formatItemDetails() : void {
    this.item.rank = this.item.rank == "none" ? "" : this.item.rank;
    if(this.item.color) { this.item.color = '#' + this.item.color; }
  }
  
  getItemImageURL() {
    return this.itemService.getItemImageURL(this.item.name);
  }

  openItemDetails(id: string): void {
    this.router.navigate(['item', encodeURIComponent(id)]);
  }
}
