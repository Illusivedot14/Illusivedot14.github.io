import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enemy, EnemySkills, Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _item_URL: string = "https://raw.githubusercontent.com/sfarmani/twrpg-info/master/items.json";
  private _enemy_URL: string = "https://raw.githubusercontent.com/Illusivedot14/twrpg-info/master/bosses.json";
  private _enemy_skills_URL: string = "https://raw.githubusercontent.com/Illusivedot14/twrpg-info/master/bosses.json";
  constructor(private http: HttpClient) { }

  getItems() : Observable<Item[]>
  {
    return this.http.get<Item[]>(this._item_URL);
  }

  getEnemies() : Observable<Enemy[]>
  {
    return this.http.get<Enemy[]>(this._enemy_URL);
  }
  getEnemySkills() : Observable<EnemySkills[]>
  {
    return this.http.get<EnemySkills[]>(this._enemy_skills_URL);
  }
}