import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule} from '@angular/material/slider';

import { GaugeModule } from 'angular-gauge';

import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemDatabaseComponent } from './components/item-database/item-database.component';
import { ItemComponent } from './components/item/item.component';
import { EnemyDatabaseComponent } from './components/enemy-database/enemy-database.component';
import { EnemyComponent } from './components/enemy/enemy.component';


import { Minor0HydraComponent } from './components/guides/minor0-hydra/minor0-hydra.component';
import { Minor1JackComponent } from './components/guides/minor1-jack/minor1-jack.component';
import { Minor2CountComponent } from './components/guides/minor2-count/minor2-count.component';
import { Minor3MageComponent } from './components/guides/minor3-mage/minor3-mage.component';
import { Minor4WingsComponent } from './components/guides/minor4-wings/minor4-wings.component';
import { Minor5GateComponent } from './components/guides/minor5-gate/minor5-gate.component';
import { Minor6AngelComponent } from './components/guides/minor6-angel/minor6-angel.component';
import { Minor7CorruptComponent } from './components/guides/minor7-corrupt/minor7-corrupt.component';
import { Minor8SoulComponent } from './components/guides/minor8-soul/minor8-soul.component';
import { Minor9SpiderComponent } from './components/guides/minor9-spider/minor9-spider.component';
import { Minor10LordComponent } from './components/guides/minor10-lord/minor10-lord.component';
import { Minor11DemonComponent } from './components/guides/minor11-demon/minor11-demon.component';
import { Minor12ClownComponent } from './components/guides/minor12-clown/minor12-clown.component';

import { Mid0SpiritComponent } from './components/guides/mid0-spirit/mid0-spirit.component';
import { Mid1RectusComponent } from './components/guides/mid1-rectus/mid1-rectus.component';
import { Mid2FlameComponent } from './components/guides/mid2-flame/mid2-flame.component';
import { Mid3TurtleComponent } from './components/guides/mid3-turtle/mid3-turtle.component';

import { High0BoneComponent } from './components/guides/high0-bone/high0-bone.component';
import { High1SkeletonComponent } from './components/guides/high1-skeleton/high1-skeleton.component';
import { High2ZombieComponent } from './components/guides/high2-zombie/high2-zombie.component';
import { High3EntComponent } from './components/guides/high3-ent/high3-ent.component';
import { High4ArchangelComponent } from './components/guides/high4-archangel/high4-archangel.component';
import { High5ShadowComponent } from './components/guides/high5-shadow/high5-shadow.component';

import { End0DeathComponent } from './components/guides/end0-death/end0-death.component';
import { End1ValtoraComponent } from './components/guides/end1-valtora/end1-valtora.component';
import { End2IfritComponent } from './components/guides/end2-ifrit/end2-ifrit.component';
import { End3NereidComponent } from './components/guides/end3-nereid/end3-nereid.component';
import { End4AgarethComponent } from './components/guides/end4-agareth/end4-agareth.component';
import { CharacterDatabaseComponent } from './components/character-database/character-database.component';
import { CharacterComponent } from './components/character/character.component';
import { DefaultComponent } from './components/guides/default/default.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ItemDatabaseComponent,
    ItemComponent,
    EnemyDatabaseComponent,
    EnemyComponent,
    Minor0HydraComponent,
    Minor1JackComponent,
    Minor2CountComponent,
    Minor3MageComponent,
    Minor4WingsComponent,
    Minor5GateComponent,
    Minor6AngelComponent,
    Minor7CorruptComponent,
    Minor8SoulComponent,
    Minor9SpiderComponent,
    Minor10LordComponent,
    Minor11DemonComponent,
    Minor12ClownComponent,
    Mid0SpiritComponent,
    Mid1RectusComponent,
    Mid2FlameComponent,
    Mid3TurtleComponent,
    High0BoneComponent,
    High1SkeletonComponent,
    High2ZombieComponent,
    High3EntComponent,
    High4ArchangelComponent,
    High5ShadowComponent,
    End0DeathComponent,
    End1ValtoraComponent,
    End2IfritComponent,
    End3NereidComponent,
    End4AgarethComponent,
    CharacterDatabaseComponent,
    CharacterComponent,
    DefaultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GaugeModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatGridListModule,
    MatSliderModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
