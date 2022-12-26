import { Component } from '@angular/core';
import { LeagueDataService } from '../../@core/services/data-services/league-data.service';

@Component({
  selector: 'ngx-scores',
  styleUrls: ['./scores.component.scss'],
  templateUrl: './scores.component.html',
})
export class ScoresComponent {

  constructor(private leagueDataService: LeagueDataService) {}

  selectedItem = '1';
  mobile: boolean = false;
  schedule: Array<Object> = [];
  teams: Array<Object> = [];
  teamMap: Object = {};

  ngOnInit() {
    if (window.screen.width < 400) {
      this.mobile = true;
    }
    // we have to map teams here
  }

  getMatchups(): Object {
    let matchups = [];
    this.teams = this.leagueDataService.getDataProperty('teams');
    this.schedule = this.leagueDataService.getDataProperty("schedule");
    const gamesPerWeek = 6; // TODO: this should be: teamsInLeague / 2

    if (this.teams && this.teams.length && !this.teamMap[2]) {
      this.teams.forEach((team) => {
        this.teamMap[team['id']] = team;
      })
    }

    if (this.schedule) {
      for (let i=0; i < this.schedule.length; i++) {
        if (this.selectedItem == this.schedule[i]['matchupPeriodId']) {
          // we found the matchup week, count gamesPerWeek from this index
          this.schedule[i]['away']['team'] = this.getTeamName(this.schedule[i], 'away'); 
          this.schedule[i]['home']['team'] = this.getTeamName(this.schedule[i], 'home'); 
          matchups.push(this.schedule[i]);
        }
      }
    }
    console.log(matchups);
    return matchups;
  }

  getTeamLogo(matchup, status) {
    return this.teamMap[matchup[status].teamId].logo;
  }

  getTeamName(matchup, status) {
    return this.teamMap[matchup[status].teamId].name;
  }

  getTeamScore(matchup, status) {
    return matchup[status].totalPoints;
  }


}
