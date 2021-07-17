import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _item_URL: string = "https://raw.githubusercontent.com/sfarmani/twrpg-info/master/items.json";
  
  constructor(private http: HttpClient) { }

  getItems() : Observable<Item[]>
  {
    return this.http.get<Item[]>(this._item_URL);
  }
}