import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-minor4-wings',
  templateUrl: './minor4-wings.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Minor4WingsComponent extends EnemyComponent {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
