import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { StandingsComponent } from './standings/standings.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { RankingsComponent } from './rankings/rankings.component';
import { OwnersComponent } from './owners/owners.component';
import { ScoresComponent } from './scores/scores.component';
import { ThemesComponent } from './themes/themes.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'standings',
      component: StandingsComponent,
    },
    {
      path: 'scores',
      component: ScoresComponent,
    },
    {
      path: 'insights',
      loadChildren: () => import('./insights/insights.module')
        .then(m => m.InsightsModule),
    },
    {
      path: 'history',
      loadChildren: () => import('./history/history.module')
        .then(m => m.HistoryModule),
    },
    {
      path: 'overview',
      component: OverviewComponent,
    },
    {
      path: 'rankings',
      component: RankingsComponent,
    },
    {
      path: 'owners',
      component: OwnersComponent,
    },
    {
      path: 'themes',
      component: ThemesComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
