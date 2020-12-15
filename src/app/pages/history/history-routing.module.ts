import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonsComponent } from './seasons/seasons.component';
import { HistoryComponent } from './history.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { AchievementsComponent } from './achievements/achievements.component';

const routes: Routes = [{
  path: '',
  component: HistoryComponent,
  children: [
    {
      path: 'seasons',
      component: SeasonsComponent,
    },
    {
      path: 'hall-of-fame',
      component: HallOfFameComponent,
    },
    {
      path: 'achievements',
      component: AchievementsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {
}
