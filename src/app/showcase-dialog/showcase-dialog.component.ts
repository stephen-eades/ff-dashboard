import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-showcase-dialog',
  templateUrl: 'showcase-dialog.component.html',
  styleUrls: ['showcase-dialog.component.scss'],
})
export class ShowcaseDialogComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) {}

  public setLeagueId(): void {
    let league_id: string = (<HTMLInputElement>document.getElementById("league_id")).value;
    if (league_id != null && league_id.length > 0 && league_id.match(/^[0-9]*$/)) {
      // valid input
      window.localStorage.setItem('league_id', league_id);
      window.location.reload();
      this.dismiss();
    } else {
      // fresh start
      window.localStorage.clear();
      window.location.reload();
    }
  }

  public setLeagueIdForDemo(): void {
    window.localStorage.setItem('league_id', '93752695');
    window.location.reload();
    this.dismiss();
  }

  openEspnBrowserLogin(): void {
    window.open('https://www.espn.com/fantasy/football/', '_system');
  }

  dismiss() {
    this.ref.close();
  }

}
