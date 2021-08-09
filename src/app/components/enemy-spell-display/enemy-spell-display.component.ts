import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  @Input() caster: string = "";
  constructor(private router: Router, private _enemyService: HttpService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  getEnemyImageURL(name: string)
  {
    if(name == "Elemental of Chaos") return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(this._enemyService.getEnemyImageFilename(name)) + '.jpg';
    if(name == "Hell Golem") return "https://static.wikia.nocookie.net/wowpedia/images/4/49/BTNInfernal.png";
    return 'https://raw.githubusercontent.com/sfarmani/twicons/master/' + encodeURIComponent(this._enemyService.getEnemyImageFilename(name)) + '%20Icon.jpg';
  }
  openEnemyDetails(id: string): void {
    this.router.navigate(['enemy', encodeURIComponent(id)]);
  }
  capitalizeFirstLetter(name: string) : string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  getEnemySpellMP4(spellName : string) : SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://ia601502.us.archive.org/5/items/twrpg_guidebook/EnemySpells%2F" + encodeURI(this.category) + '%2F' + encodeURI(this.caster) + '%2F' + encodeURI(spellName) + ".mp4");
  }
  openMinionDetails(id: string) : void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/enemy/${id}`])
    );
  
    window.open(url, '_blank');
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
      case /^Corruption Aura/ig.test(spellName): return false;
      case /^Corrupt Power/ig.test(spellName): return false;
      case /^Corrupt Explosion/ig.test(spellName): return false;
      case /^Nightmare Body/ig.test(spellName): return false;
      case /^Berserk/ig.test(spellName): return false;
      case /^Mystic Shell/ig.test(spellName): return false;
      case /^Hard Shell/ig.test(spellName): return false;
      case /^Infected Swipes/ig.test(spellName): return false;
      case /^Lifesteal/ig.test(spellName): return false;
      case /^Deathly Shroud/ig.test(spellName): return false;
      case /^Ent Power/ig.test(spellName): return false;
      case /^Shadow Attack/ig.test(spellName): return false;
      case /^Reinforcement of Darkness/ig.test(spellName): return false;
      case /^Bindings of Darkness/ig.test(spellName): return false;
      case /^Grasp of the Fiend/ig.test(spellName): return false;
      default: return true;
  }
  }
}
