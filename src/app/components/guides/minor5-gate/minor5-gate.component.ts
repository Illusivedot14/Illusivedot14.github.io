import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';
@Component({
  selector: 'app-minor5-gate',
  templateUrl: './minor5-gate.component.html',
  styleUrls: ['../default/default.component.scss']
})
export class Minor5GateComponent extends EnemyComponent {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
