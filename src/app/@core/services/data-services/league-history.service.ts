import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    // let cookies: Object = {"swid": swid, "espn_s2": espn_s2};
    // let cookies: string = 'espnAuth={"swid":"{3A83D8F8-4523-4049-ABE8-9F7BCF4C3E0C}"}; espn_s2=AEAY3VM4%2F11LIktKiuhEauVKhtp5Vt%2B2L%2F7f1vr4SusgFkAN1QaspTn%2FrhAZQ2SgdWrJG5fN8dGn65a4Fh0idfAn1%2FjWNYhB9eV5DYTn5jBFlCmkXMUXsHLT5vto0lD3GkqhNMPX4ISR4fF484p%2F9oHwz0%2BMEn2PfbRN8VLtgQRV3qqMtuz3k1D90LszwSBjkTlEYuHz4MyVNLMYYMgtFbymHs%2Bdm%2FON1Y8XLLiU7S%2BRxrFbODEC6U%2FsfDoQxbrJI%2BF9xSizqmpdcH4ssnIy1CXBla7endFByiooANZ6MkTMHA%3D%3D;'

    // let headers: HttpHeaders = new HttpHeaders({'cookie': cookies});
    // console.log(headers);
    // document.cookie = 'swid={3A83D8F8-4523-4049-ABE8-9F7BCF4C3E0C}'
    // document.cookie = 'espn_s2=AEAY3VM4%2F11LIktKiuhEauVKhtp5Vt%2B2L%2F7f1vr4SusgFkAN1QaspTn%2FrhAZQ2SgdWrJG5fN8dGn65a4Fh0idfAn1%2FjWNYhB9eV5DYTn5jBFlCmkXMUXsHLT5vto0lD3GkqhNMPX4ISR4fF484p%2F9oHwz0%2BMEn2PfbRN8VLtgQRV3qqMtuz3k1D90LszwSBjkTlEYuHz4MyVNLMYYMgtFbymHs%2Bdm%2FON1Y8XLLiU7S%2BRxrFbODEC6U%2FsfDoQxbrJI%2BF9xSizqmpdcH4ssnIy1CXBla7endFByiooANZ6MkTMHA%3D%3D'
    // return this.httpClient.get(url, { withCredentials: true });
    // return this.httpClient.get(url, { headers: headers, withCredentials: true });
    return this.httpClient.get(url);
  }
}
