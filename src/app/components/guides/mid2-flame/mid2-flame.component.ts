import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';


@Component({
  selector: 'app-mid2-flame',
  templateUrl: './mid2-flame.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Mid2FlameComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
  private exclusionList : string[] = [];
  getSkills(names: string[]) : EnemySkill[] {
    for(let i = 0; i < names.length; i++){
      names[i] = decodeURI(names[i]);
      if(!this.exclusionList.includes(names[i]))
        this.exclusionList.push(names[i]);
    }
    let result = this.skills.filter(x => names.includes(x.name));
    return result;
  }
  getRemainingSkills() : EnemySkill[] {
    let result = this.skills.filter(x => !this.exclusionList.includes(x.name));
    return result;
  }
}
