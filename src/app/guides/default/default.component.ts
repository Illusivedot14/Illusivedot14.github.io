import { Component, Input } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../pages/enemy/enemy.component';

@Component({
  selector: 'defaultGuide',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultGuideComponent extends EnemyComponent  {
  @Input() enemy: Enemy;
  @Input() skills: Record<string, EnemySkill[]>;
}
