import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-end1-valtora',
  templateUrl: './end1-valtora.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class End1ValtoraComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
