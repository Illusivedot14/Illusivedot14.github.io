import { Component } from '@angular/core';
import { DefaultGuideComponent } from '../../default/default.component';

@Component({
  selector: 'zombieGuide',
  templateUrl: './zombie.component.html',
  styleUrls: ['../../default/default.component.scss']
})
export class ZombieGuideComponent extends DefaultGuideComponent  {
}
