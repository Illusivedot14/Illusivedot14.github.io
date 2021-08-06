import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';


@Component({
  selector: 'app-mid2-flame',
  templateUrl: './mid2-flame.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Mid2FlameComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
