import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-high2-zombie',
  templateUrl: './high2-zombie.component.html',
  styleUrls: ['../../enemy/enemy.component.scss']
})
export class High2ZombieComponent extends EnemyComponent  {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];
}
