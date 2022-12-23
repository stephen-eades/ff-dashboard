import { Component } from '@angular/core';
import { LeagueDataService } from '../../@core/services/data-services/league-data.service';

@Component({
  selector: 'ngx-standings',
  styleUrls: ['./standings.component.scss'],
  templateUrl: './standings.component.html',
})
export class StandingsComponent {

  constructor(private leagueDataService: LeagueDataService) {
  }

  mobile: boolean = false;

  ngOnInit() {
    if (window.screen.width < 400) {
      this.mobile = true;
    }
  }

  EAST: number = 0;
  WEST: number = 1;

  getTeams(): Object {
    const teams = this.leagueDataService.getDataProperty("teams");
    if (teams) {
      teams.sort(function(a,b) {
        // Sort by wins, then losses, then points for
        return b.record.overall.wins - a.record.overall.wins
          || a.record.overall.losses - b.record.overall.losses
          || b.record.overall.pointsFor - a.record.overall.pointsFor;
      });
    }
    return teams;
  }
  
  getTeamAbbrev(team: any): string {
    return team.abbrev ? team.abbrev : "ABV";
  }
  
  getTeamName(team: any): string {
    return team.location && team.nickname ? team.location + ' ' + team.nickname : "NAME";
  }
  
  getTeamDivision(team): string {
    if (team.divisionId == this.EAST) {
      return 'East';
    } else if (team.divisionId == this.WEST) {
      return 'West';
    } else {
      return 'Division'
    }
  }

  getTeamRecord(team: any): string {
    if (!team.recordHeader) {
      const wins = team.record.overall.wins;
      const losses = team.record.overall.losses;
      const ties = team.record.overall.ties;
      return `${wins}-${losses}-${ties}`
    } else {
      return team.recordHeader;
    }
  }

  getTeamPointsFor(team: any): number {
    if (!team.pointsForHeader) {
      return team.record ? team.record.overall.pointsFor.toFixed(1) : "FOR";
    } else {
      return team.pointsForHeader;
    }
  }

  getTeamPointsAgainst(team: any): number {
    if (!team.pointsAgainstHeader) {
      return team.record ? team.record.overall.pointsAgainst.toFixed(1) : "AGAINST";
    } else {
      return team.pointsAgainstHeader;
    }
  }
}
