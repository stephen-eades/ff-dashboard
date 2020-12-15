import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsComponent } from './insights.component';
import { PowerRankingsComponent } from './power-rankings/power-rankings.component';
import { TradeTrackerComponent } from './trade-tracker/trade-tracker.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { LeagueTrendsComponent } from './league-trends/league-trends.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    InsightsRoutingModule,
    NbSelectModule,
    NbIconModule,
  ],
  declarations: [
    InsightsComponent,
    LeagueTrendsComponent,
    PowerRankingsComponent,
    TradeTrackerComponent,
    SimulatorComponent,
  ],
})
export class InsightsModule { }
