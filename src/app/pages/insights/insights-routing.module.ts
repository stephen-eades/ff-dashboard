import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsightsComponent } from './insights.component';
import { PowerRankingsComponent } from './power-rankings/power-rankings.component';
import { TradeTrackerComponent } from './trade-tracker/trade-tracker.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { LeagueTrendsComponent } from './league-trends/league-trends.component';

const routes: Routes = [
  {
    path: '',
    component: InsightsComponent,
    children: [
      {
        path: 'power-rankings',
        component: PowerRankingsComponent,
      },
      {
        path: 'trade-tracker',
        component: TradeTrackerComponent,
      },
      {
        path: 'league-trends',
        component: LeagueTrendsComponent,
      },
      {
        path: 'simulator',
        component: SimulatorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class InsightsRoutingModule {
}
