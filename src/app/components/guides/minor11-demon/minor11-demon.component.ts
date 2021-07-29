import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-minor11-demon',
  templateUrl: './minor11-demon.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Minor11DemonComponent extends EnemyComponent {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
