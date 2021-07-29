import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-minor1-jack',
  templateUrl: './minor1-jack.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Minor1JackComponent  extends EnemyComponent {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
