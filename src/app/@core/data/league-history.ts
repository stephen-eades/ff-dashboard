import { Observable } from 'rxjs';

export interface LeagueHistory {
  data: any[];
}

export abstract class LeagueHistoryData {
  abstract getLeagueHistoryData(year: string): Observable<LeagueHistory>;
}
