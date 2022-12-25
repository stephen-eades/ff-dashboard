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
  teamMapping: Object = {}

  ngOnInit() {
    if (window.screen.width < 400) {
      this.mobile = true;
    }
  }

  getMatchups(): Object {
    const schedule = this.leagueDataService.getDataProperty("schedule");
    let matchups = [];
    const gamesPerWeek = 6; // TODO: this should be: teamsInLeague / 2

    if (schedule) {
      for (let i=0; i < schedule.length; i++) {
        if (this.selectedItem == schedule[i].matchupPeriodId) {
          // we found the matchup week, count gamesPerWeek from this index
          matchups = schedule.slice(i, i+gamesPerWeek);
        }
      }
    }
    
    return matchups;
  }

  getTeamLogo(matchup, status) {
    return 'logo';
  }

  getTeamName(matchup, status) {
    return 'name';
  }

  getTeamScore(matchup, status) {
    return 'score';
  }


}
