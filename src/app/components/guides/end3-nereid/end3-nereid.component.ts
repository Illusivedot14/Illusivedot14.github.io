import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-end3-nereid',
  templateUrl: './end3-nereid.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class End3NereidComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
