import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enemy, EnemySkill, Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private itemURL:        string = "https://raw.githubusercontent.com/sfarmani/twrpg-info/master/items.json";
  private enemyURL:       string = "https://raw.githubusercontent.com/sfarmani/twrpg-info/master/bosses.json";
  private enemySkillsURL: string = "https://raw.githubusercontent.com/sfarmani/twrpg-info/master/skills-boss.json";
  private iconURL:        string = "https://raw.githubusercontent.com/sfarmani/twicons/master/";
  
  constructor(private http: HttpClient) { }

  getItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.itemURL);
  }

  getItemImageURL(name: string): string {
    if(name.includes("Token")) { return this.iconURL + 'Token.jpg'; }
    if(name.includes("Sealed") && name !== "Sealed Weapon") { name = name.substring(7) }
    return this.iconURL + encodeURIComponent(name) + '.jpg';
  }

  getEnemies() : Observable<Enemy[]> {
    return this.http.get<Enemy[]>(this.enemyURL);
  }

  getEnemySkills() : Observable<EnemySkill[]> {
    return this.http.get<EnemySkill[]>(this.enemySkillsURL);
  }
  getEnemyImageURL(name: string) : string {
    if(name == "Elemental of Chaos") return this.iconURL + encodeURIComponent(this.correctedEnemyName(name)) + '.jpg';
    return this.iconURL + encodeURIComponent(this.correctedEnemyName(name)) + '%20Icon.jpg'
  }
  correctedEnemyName(boss_name: string): string {
    switch(true){
        case /^Spider/ig.test(boss_name): return "Spider Queen";
        case /^(Giant|Frost|Frostvemon) Spider/ig.test(boss_name): return "Spider Queen";
        case /^Wolf/ig.test(boss_name): return "Silverback Wolf";
        case /^(Shadow|Dark) Wolf/ig.test(boss_name): return "Silverback Wolf";
        
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

        case /^Spider/ig.test(boss_name): return "Spider Queen";
        case /^Frost Skirmisher/ig.test(boss_name): return "Spider Queen";
        case /Everfrost/ig.test(boss_name): return "Everfrost";
        case /Frozen Soul/ig.test(boss_name): return "Evil Lava Spawn";
        case /Frostspider Queen/ig.test(boss_name): return "Spider Queen";

        case /Slime Monster/ig.test(boss_name): return "Slime";
        case /Golem Monster/ig.test(boss_name): return "Flesh Golem"; 
        case /Hound Monster/ig.test(boss_name): return "Felhound";
        case /Beriel/ig.test(boss_name): return "Demon Lord";

        case /Avenger/ig.test(boss_name): return "Monster - Avenger";
        case /Stalker/ig.test(boss_name): return "Monster - Stalker";
        case /Rectus/ig.test(boss_name): return "Corruptor";

        case /Hatred/ig.test(boss_name): return "Monster -Hatred";
        case /Anger/ig.test(boss_name): return "Monster - Anger";

        case /Healing Turtle/ig.test(boss_name): return "Turtle Lord";
        case /Turtle/ig.test(boss_name): return "Turtle Lord";
        
        case /Desperia/ig.test(boss_name): return "Skeleton King";
        case /Samael/ig.test(boss_name): return "Archangel";
        case /Irbert/ig.test(boss_name): return "Shadow Dragon";
        case /Elemental of Chaos/ig.test(boss_name): return "ElementalistF";
        default: return boss_name;
    }
  }
}