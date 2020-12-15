import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LeagueHistoryService } from 'app/@core/services/data-services/league-history.service';
import { LeagueDataService } from 'app/@core/services/data-services/league-data.service';
import { ShowcaseDialogComponent } from '../showcase-dialog/showcase-dialog.component';


import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  constructor(
    private dialogService: NbDialogService,
    private leagueHistoryService: LeagueHistoryService,
    private leagueDataService: LeagueDataService,
  ) {}


  // Variables
  menu = MENU_ITEMS;
  isLeagueLoaded: boolean = false;
  leagueId: string;


  // Initialization
  ngOnInit(): void {
    this.leagueValidation();
  }

  /**
  * Return true if league_id is available in localStorage
  */
  leagueValidation(): void {
    if (this.isLeagueIdSet()) {
      this.leagueId = window.localStorage.getItem('league_id');

      this.leagueHistoryService.getPublicLeague(this.leagueId).subscribe(
        (res: any)=>{
          this.storeLeagueData(res);
        },
        (error)=> {
          this.leagueId = "";
          this.clearDashboardAndRestart();
      });

    } else {
      this.clearDashboardAndRestart();
    }
  }

  /**
  * Return true if league_id is available in localStorage
  * Return false if league_id is not in localStorage
  */
  isLeagueIdSet(): boolean {
    if (window.localStorage.getItem('league_id')) {
      return true;
    } else {
      return false;
    }
  }

  /**
  * Display the intro for users to input their league ID
  */
  displayIntro(): void {
    const dialogRef = this.dialogService.open(ShowcaseDialogComponent, {
      context: {},
    });
  }

  /**
  * Reset the dashboard for a new league ID
  */
  clearDashboardAndRestart(): void {
    window.localStorage.clear();
    this.displayIntro();
  }

  /**
  * Store the leagues data for later reference
  */
  storeLeagueData(data: any): void {
    this.leagueDataService.storeInitialDataset(data);
  }

}
