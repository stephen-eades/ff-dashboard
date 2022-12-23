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

  isPrivateLeague: boolean = false;

  public setLeagueId(): void {
    let league_id: string = (<HTMLInputElement>document.getElementById("league_id")).value;
    // let swid: string = (<HTMLInputElement>document.getElementById("swid")).value;
    // let s2: string = (<HTMLInputElement>document.getElementById("espn_s2")).value;    
    if (league_id != null && league_id.length > 0 && league_id.match(/^[0-9]*$/)) {
      // valid input, now determine if public or private league 
      // if (this.isPrivateLeague) {
      //   // We need to grab the cookies 
      //   let swid: string = (<HTMLInputElement>document.getElementById("swid")).value;
      //   let s2: string = (<HTMLInputElement>document.getElementById("espn_s2")).value;
      //   if (swid != null && swid.length > 0) {
      //     console.log('setting swid');
      //     window.localStorage.setItem('swid', swid);
      //   } else {
      //     // TODO: Error!
      //   }
      //   if (s2 != null && s2.length > 0) {
      //     console.log('setting s2');
      //     window.localStorage.setItem('espn_s2', s2);
      //   } else {
      //     // TODO: Error!
      //   }
      // }

      // window.localStorage.setItem('swid', swid);
      // window.localStorage.setItem('espn_s2', s2);
      window.localStorage.setItem('league_id', league_id);
      window.location.reload();
      this.dismiss();
    } else {
      // fresh start
      window.localStorage.clear();
      window.location.reload();
    }
  }

  public togglePrivateLeagueInput(): void {
    this.isPrivateLeague = !this.isPrivateLeague;
  }

  openEspnBrowserLogin(): void {
    window.open('https://www.espn.com/fantasy/football/', '_system');
  }

  dismiss() {
    this.ref.close();
  }

  getStepperClick(stepper) {
    if (stepper.selectedIndex == 2) {
      return this.setLeagueId()
    } else {
      return stepper.next()
    }
  }

  getStepperString(stepper) {
    if (stepper.selectedIndex == 2) {
      return "Submit";
    } else {
      return "Next"
    }
  }

}
