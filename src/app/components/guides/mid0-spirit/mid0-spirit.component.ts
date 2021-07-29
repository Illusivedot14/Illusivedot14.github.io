import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';


@Component({
  selector: 'app-mid0-spirit',
  templateUrl: './mid0-spirit.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Mid0SpiritComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
