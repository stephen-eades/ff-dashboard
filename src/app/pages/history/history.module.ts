import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';

// modules
import { ThemeModule } from '../../@theme/theme.module';
import { HistoryRoutingModule } from './history-routing.module';

// components
import { HistoryComponent } from './history.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { AchievementsComponent } from './achievements/achievements.component';


const COMPONENTS = [
  HistoryComponent,
  SeasonsComponent,
  HallOfFameComponent,
  AchievementsComponent,
];

const ENTRY_COMPONENTS = [
];

const MODULES = [
  FormsModule,
  ThemeModule,
  HistoryRoutingModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbTooltipModule,
];

const SERVICES = [
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class HistoryModule {
}
