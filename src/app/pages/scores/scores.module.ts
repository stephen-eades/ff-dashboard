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
  NbLayoutModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ScoresComponent } from './scores.component';

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
    NbLayoutModule,
  ],
  declarations: [
    ScoresComponent,
  ],
  providers: [
  ],
})
export class ScoresModule { }
