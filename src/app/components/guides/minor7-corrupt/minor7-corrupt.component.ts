import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-minor7-corrupt',
  templateUrl: './minor7-corrupt.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Minor7CorruptComponent extends EnemyComponent {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
