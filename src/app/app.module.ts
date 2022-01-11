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

import { HomeComponent } from './pages/home/home.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemDatabaseComponent } from './pages/item-database/item-database.component';
import { ItemComponent } from './pages/item/item.component';

import { EnemyCardComponent } from './components/enemy-card/enemy-card.component';
import { EnemyDatabaseComponent } from './pages/enemy-database/enemy-database.component';
import { EnemyComponent } from './pages/enemy/enemy.component';
import { EnemySpellDisplayComponent } from './components/enemy-spell-display/enemy-spell-display.component';

import { CharacterDatabaseComponent } from './pages/character-database/character-database.component';
import { CharacterComponent } from './pages/character/character.component';

import { BackButtonComponent } from './components/back-button/back-button.component';

import { DefaultGuideComponent } from './guides/default/default.component';

import { HydraGuideComponent }     from './guides/minor/0-hydra/hydra.component';
import { JackGuideComponent }      from './guides/minor/1-jack/jack.component';
import { CountGuideComponent }     from './guides/minor/2-count/count.component';
import { MageGuideComponent }      from './guides/minor/3-mage/mage.component';
import { WingsGuideComponent }     from './guides/minor/4-wings/wings.component';
import { GateGuideComponent }      from './guides/minor/5-gate/gate.component';
import { AngelGuideComponent }     from './guides/minor/6-angel/angel.component';
import { CorruptGuideComponent }   from './guides/minor/7-corrupt/corrupt.component';
import { ClownGuideComponent }     from './guides/minor/8-clown/clown.component';
import { SoulGuideComponent }      from './guides/minor/9-soul/soul.component';
import { SpiderGuideComponent }    from './guides/minor/10-spider/spider.component';
import { LordGuideComponent }      from './guides/minor/11-lord/lord.component';
import { DemonGuideComponent }     from './guides/minor/12-demon/demon.component';

import { SpiritGuideComponent }    from './guides/mid/0-spirit/spirit.component';
import { RectusGuideComponent }    from './guides/mid/1-rectus/rectus.component';
import { FlameGuideComponent }     from './guides/mid/2-flame/flame.component';
import { TurtleGuideComponent }    from './guides/mid//3-turtle/turtle.component';

import { BoneGuideComponent }      from './guides/high/0-bone/bone.component';
import { SkeletonGuideComponent }  from './guides/high/1-skeleton/skeleton.component';
import { ZombieGuideComponent }    from './guides/high/2-zombie/zombie.component';
import { EntGuideComponent }       from './guides/high/3-ent/ent.component';
import { ArchangelGuideComponent } from './guides/high/4-archangel/archangel.component';
import { ShadowGuideComponent }    from './guides/high/5-shadow/shadow.component';

import { DeathGuideComponent }     from './guides/late/0-death/death.component';
import { ValtoraGuideComponent }   from './guides/late/1-valtora/valtora.component';
import { IfritGuideComponent }     from './guides/late/2-ifrit/ifrit.component';

import { NereidGuideComponent }    from './guides/end/0-nereid/nereid.component';
import { AgarethGuideComponent }   from './guides/end/1-agareth/agareth.component';
// import { DukeGuideComponent }      from './guides/end5-duke/duke.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ItemDatabaseComponent,
    ItemComponent,
    EnemyDatabaseComponent,
    EnemyComponent,
    HydraGuideComponent,
    JackGuideComponent,
    CountGuideComponent,
    MageGuideComponent,
    WingsGuideComponent,
    GateGuideComponent,
    AngelGuideComponent,
    CorruptGuideComponent,
    ClownGuideComponent,
    SoulGuideComponent,
    SpiderGuideComponent,
    LordGuideComponent,
    DemonGuideComponent,
    SpiritGuideComponent,
    RectusGuideComponent,
    FlameGuideComponent,
    TurtleGuideComponent,
    BoneGuideComponent,
    SkeletonGuideComponent,
    ZombieGuideComponent,
    EntGuideComponent,
    ArchangelGuideComponent,
    ShadowGuideComponent,
    DeathGuideComponent,
    ValtoraGuideComponent,
    IfritGuideComponent,
    NereidGuideComponent,
    AgarethGuideComponent,
    // DukeGuideComponent,
    DefaultGuideComponent,
    CharacterDatabaseComponent,
    CharacterComponent,
    EnemySpellDisplayComponent,
    BackButtonComponent,
    EnemyCardComponent,
    ItemCardComponent,
    
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
