import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-minor8-soul',
  templateUrl: './minor8-soul.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Minor8SoulComponent extends EnemyComponent {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
