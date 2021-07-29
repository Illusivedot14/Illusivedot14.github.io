import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-minor12-clown',
  templateUrl: './minor12-clown.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Minor12ClownComponent extends EnemyComponent {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
