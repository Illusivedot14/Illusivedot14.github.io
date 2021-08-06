import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-mid3-turtle',
  templateUrl: './mid3-turtle.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class Mid3TurtleComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
