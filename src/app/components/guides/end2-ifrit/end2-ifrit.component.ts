import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-end2-ifrit',
  templateUrl: './end2-ifrit.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class End2IfritComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
