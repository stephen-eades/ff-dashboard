import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { StandingsModule } from './standings/standings.module';
import { HomeModule } from './home/home.module';
import { ScoresModule } from './scores/scores.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { OverviewModule } from './overview/overview.module';
import { RankingsModule } from './rankings/rankings.module';
import { OwnersModule } from './owners/owners.module';
import { ThemesModule } from './themes/themes.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    StandingsModule,
    HomeModule,
    ScoresModule,
    MiscellaneousModule,
    OverviewModule,
    RankingsModule,
    OwnersModule,
    ThemesModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
