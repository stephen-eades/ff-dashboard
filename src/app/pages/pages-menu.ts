import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'CURRENT SEASON',
    group: true,
  },
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Standings',
    icon: 'bar-chart-outline',
    link: '/pages/standings',
  },
  {
    title: 'Scores',
    icon: 'calendar-outline',
    link: '/pages/scores',
  },
  {
    title: 'Insight',
    icon: 'search-outline',
    children: [
      {
        title: 'Power Rankings',
        link: '/pages/insights/power-rankings',
      },
      {
        title: 'Trade Tracker',
        link: '/pages/insights/trade-tracker',
      },
      {
        title: 'League Trends',
        link: '/pages/insights/league-trends',
      },
      {
        title: 'Simulator',
        link: '/pages/insights/simulator',
      },
    ],
  },
  {
    title: 'LEAGUE HISTORY',
    group: true,
  },
  {
    title: 'Rankings',
    icon: 'trending-up-outline',
    link: '/pages/rankings',
  },
  {
    title: 'Seasons',
    icon: 'book-outline',
    link: '/pages/history/seasons',
  },
  {
    title: 'Hall of Fame',
    icon: 'award-outline',
    link: '/pages/history/hall-of-fame',
  },
  {
    title: 'Owners',
    icon: 'people-outline',
    link: '/pages/owners',
  },
];
