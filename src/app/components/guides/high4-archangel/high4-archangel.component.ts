import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-high4-archangel',
  templateUrl: './high4-archangel.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class High4ArchangelComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
