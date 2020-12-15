import { Component, OnInit } from '@angular/core';
import { LeagueHistoryService } from 'app/@core/services/data-services/league-history.service';
import { LeagueDataService } from 'app/@core/services/data-services/league-data.service';
import { League } from 'app/models/league.model';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  leagueData: any;
  teamsArray: Array<any> = [];
  isLeagueLoaded: boolean;

  constructor(
    private leagueHistoryService: LeagueHistoryService,
    private leagueDataService: LeagueDataService
  ) {}


  ngOnInit(): void {
    this.isLeagueLoaded = false;
    this.getLeagueData();
  }

  /**
   * 
   */
  public getLeagueData(): void {
    this.leagueHistoryService.getPublicLeague(window.localStorage.getItem('league_id')).subscribe(
      (res: League)=>{

        if (res) {
          this.leagueData = res;
          this.teamsArray = res.teams;
          this.isLeagueLoaded = true;
        }
      },
      (error)=> {
        if (error.status != 200) {
          window.localStorage.clear();
        }
    });
  }

  /**
   * 
   * @param team 
   */
  public getOwnerName(team): string { 
    let ownerHash: string = team.primaryOwner;
    let ownerName: string;
    for (const owner of this.leagueData.members) {
      if (ownerHash == owner.id) {
        ownerName = owner.firstName + " " + owner.lastName;
      }
    }
    return ownerName;
  }

  /**
   * 
   * @param team 
   */
  public getTeamImgSource(team): string {
    return team.logo;
  }

}
