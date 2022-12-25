/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './@core/services/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LeagueDataService } from './@core/services/data-services/league-data.service';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule,
  NbStepperModule,
  NbButtonModule,
  NbInputModule,
  NbIconModule,
  NbLayoutModule,
} from '@nebular/theme';

@NgModule({
  declarations: [AppComponent, ShowcaseDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbCardModule,
    NbLayoutModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    LeagueDataService,
  ],
  entryComponents: [ShowcaseDialogComponent],
})
export class AppModule {
}
