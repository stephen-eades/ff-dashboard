import { Component, OnInit } from '@angular/core';
import { LeagueDataService } from 'app/@core/services/data-services/league-data.service';


@Component({
  selector: 'ngx-standings',
  styleUrls: ['./standings.component.scss'],
  templateUrl: './standings.component.html',
})
export class StandingsComponent {

  constructor(private leagueDataService: LeagueDataService) {
  }

  getTeams(): Object {
    return this.leagueDataService.getDataProperty("teams");
  }

  getTeamAbbrev(team: any): string {
    return team.abbrev ? team.abbrev : "ABV";
  }

  getTeamLocation(team: any): string {
    return team.location ? team.location : "TEAM";
  }

  getTeamNickname(team: any): string {
    return team.nickname ? team.nickname : "NAME";
  }

}
