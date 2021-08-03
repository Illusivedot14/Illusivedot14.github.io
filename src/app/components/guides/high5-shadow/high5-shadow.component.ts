import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-high5-shadow',
  templateUrl: './high5-shadow.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class High5ShadowComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
