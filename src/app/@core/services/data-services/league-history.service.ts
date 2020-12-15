import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeagueHistoryService {

  constructor(private httpClient: HttpClient) { }

  /**
  * Returns all league data: general, settings, results, etc.
  * @param leagueId - pass in the league id to return all league information
  */
  getPublicLeague(leagueId: string) {
    let url: string = `http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${leagueId}?view=mMatchupScore&view=mTeam&view=mSettings`;
    return this.httpClient.get(url);
  }

  /**
  * Returns all league data: general, settings, results, etc.
  * @param leagueId - pass in the league id to return all league information
  * @param swid - pass in the private leagues swid cookie
  * @param espn_s2 - pass in the private league espn_s2 cookie
  */
  getPrivateLeague(leagueId: string, swid: string, espn_s2: string) {
    let url: string = `http://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${leagueId}?view=mMatchupScore&view=mTeam&view=mSettings`;
    let cookies: Object = {"swid": "add_cookie_here", "espn_s2": "add_cookie_here"};
    return this.httpClient.get(url);
  }
}
