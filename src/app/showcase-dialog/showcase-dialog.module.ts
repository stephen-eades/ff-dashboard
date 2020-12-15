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
  NbStepperModule,
  NbInputModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

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
    NbStepperModule,
    NbInputModule,
  ],
  declarations: [],
  providers: [
  ],
})
export class ShowcaseDialogModule { }
