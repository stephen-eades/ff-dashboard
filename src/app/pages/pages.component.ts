import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../showcase-dialog/showcase-dialog.component';
import { MENU_ITEMS } from './pages-menu';
import { LeagueDataService } from '../@core/services/data-services/league-data.service';
import { LeagueHistoryService } from '../@core/services/data-services/league-history.service';


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
  swid: string;
  s2: string;


  // Initialization
  ngOnInit(): void {
    this.leagueValidation();
  }

  /**
  * Return true if league_id is available in localStorage
  */
  leagueValidation(): void {
    console.log(window.localStorage);
    if (this.isLeagueIdSet()) {
      this.leagueId = window.localStorage.getItem('league_id');

      // Check if public or private
      if (this.isPrivateLeague()) {
        console.log('private');
        this.swid = window.localStorage.getItem('swid');
        this.s2 = window.localStorage.getItem('espn_s2');
        this.leagueHistoryService.getPrivateLeague(this.leagueId, this.swid, this.s2).subscribe(
          (res: any)=>{
            this.storeLeagueData(res);
          },
          (error)=> {
            this.leagueId = "";
            this.clearDashboardAndRestart();
        });
      } else {
        console.log('public');
        this.leagueHistoryService.getPublicLeague(this.leagueId).subscribe(
          (res: any)=>{
            this.storeLeagueData(res);
          },
          (error)=> {
            this.leagueId = "";
            this.clearDashboardAndRestart();
        });
      }

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
  * Return true if league_id is available in localStorage
  * Return false if league_id is not in localStorage
  */
  isPrivateLeague(): boolean {
    console.log('checking private league');
    if (window.localStorage.getItem('swid')) {
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
