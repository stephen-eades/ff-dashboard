import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeagueDataService {
    private data: Object = {};

    /**
    * Store the response from ESPN containing the league data
    * @param data = the response object from ESPN, may change at random
    */
    storeInitialDataset(data: Object) {
      for (let key of Object.keys(data)) {
        this.setDataProperty(key, data[key])
      }
    }

    getData() {
      return this.data;
    }

    setDataProperty(key: string, value: any) {
      this.data[key] = value;
    }

    getDataProperty(key: string) {
      return this.data[key];
    }
}
