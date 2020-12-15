import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LeagueHistoryService } from 'app/@core/services/data-services/league-history.service';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  leagueName: string;
  currentThemeIndex: number = 0;
  isLeagueLoaded: boolean;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private leagueHistoryService: LeagueHistoryService) {
  }

  ngOnInit() {
    this.isLeagueLoaded = false;
    this.getLeagueData();

    if (window.localStorage.getItem('previous_theme')) {
      this.themeService.changeTheme(window.localStorage.getItem('previous_theme'));
    }

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  changeThemeCustom(event) {
    this.currentThemeIndex++;

    if ( this.currentThemeIndex > 2 ) {
      this.currentThemeIndex = 0;
    }
    let themeName: string = this.themes[this.currentThemeIndex]['value'];

    this.themeService.changeTheme(themeName); // "cosmic"
    window.localStorage.setItem("previous_theme", themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  public getLeagueData(): void {
    this.leagueHistoryService.getPublicLeague(window.localStorage.getItem('league_id')).subscribe(
      (res: any)=>{
        if (res) {
          this.leagueName = res.settings.name;
          this.isLeagueLoaded = true;
        };
      },
      (error) => {
        if (error.status != 200) {
          window.localStorage.clear();
        }
    });
  }

  public clearLeagueId(): void {
    let result = window.confirm("Enter new league ID?", );
    if (result == true ) {
      window.localStorage.clear();
      window.location.reload();
    }
  }

}
