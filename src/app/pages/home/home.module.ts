import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { LeagueHistoryService } from 'app/@core/services/data-services/league-history.service';
import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    LeagueHistoryService,
  ],
})
export class HomeModule { }
