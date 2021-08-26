import { Component, Input, OnInit } from '@angular/core';
import { Enemy, EnemySkill } from 'src/app/models';
import { EnemyComponent } from '../../enemy/enemy.component';

@Component({
  selector: 'app-minor9-spider',
  templateUrl: './minor9-spider.component.html',
  styleUrls: ['../default/default.component.scss']
})
export class Minor9SpiderComponent extends EnemyComponent {
  @Input() enemy!: Enemy;
  @Input() skills!: EnemySkill[];

}
