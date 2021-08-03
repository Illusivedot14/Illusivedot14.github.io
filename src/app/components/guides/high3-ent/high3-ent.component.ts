import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-high3-ent',
  templateUrl: './high3-ent.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class High3EntComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
