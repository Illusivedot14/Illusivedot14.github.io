import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-high1-skeleton',
  templateUrl: './high1-skeleton.component.html',
  styleUrls: ['../default/default.component.scss']
})
export class High1SkeletonComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
