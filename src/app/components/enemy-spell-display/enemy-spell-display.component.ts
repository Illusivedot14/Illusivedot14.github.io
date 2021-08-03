import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enemy, EnemySkill } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-enemy-spell-display',
  templateUrl: './enemy-spell-display.component.html',
  styleUrls: ['./enemy-spell-display.component.scss']
})
export class EnemySpellDisplayComponent implements OnInit {
  @Input() skills!: EnemySkill[];
  @Input() category: string = "";
  constructor(private router: Router, private _enemyService: HttpService) { }

  ngOnInit(): void {
  }
  getEnemyImageURL(name: string)
  {
    if(name == "Elemental of Chaos") return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(this._enemyService.getEnemyImageFilename(name)) + '.jpg';
    return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(this._enemyService.getEnemyImageFilename(name)) + '%20Icon.jpg';
  }
  openEnemyDetails(id: string): void {
    this.router.navigate(['enemy', encodeURIComponent(id)]);
  }
  capitalizeFirstLetter(name: string) : string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  getEnemySpellMP4(spellName : string, caster : string) : string {
    if(!Array.isArray(caster))
    {
      return "https://ia601502.us.archive.org/5/items/twrpg_guidebook/EnemySpells%2F" + encodeURI(this.category) + '%2F' + encodeURI(caster) + '%2F' + encodeURI(spellName) + ".mp4";
    }
    let names = Array.from(caster);
    for(let skill of this.skills) {
      if(names.includes(skill.caster)) {
        return "https://ia601502.us.archive.org/5/items/twrpg_guidebook/EnemySpells%2F" + encodeURI(this.category) + '%2F' + encodeURI(skill.caster) + '%2F' + encodeURI(spellName) + ".mp4";
      }
    }
    return "";
  }
  hasMP4(spellName : string) : boolean {
    switch(true){
      case /^Pumpkin Body/ig.test(spellName): return false;
      case /^Lethal Poison/ig.test(spellName): return false;
      case /^Immortal Body/ig.test(spellName): return false;
      case /^Blessed Wings/ig.test(spellName): return false;
      case /^Dark Wings/ig.test(spellName): return false;
      case /^Nanoscale Armor/ig.test(spellName): return false;
      case /^Hellfrost Attack/ig.test(spellName): return false;
      case /^Frost Aura/ig.test(spellName): return false;
      case /^Hellfrost Body/ig.test(spellName): return false;
      case /^The Demon Lord's Power/ig.test(spellName): return false;
      case /^Instincts/ig.test(spellName): return false;
      default: return true;
  }
  }
}
