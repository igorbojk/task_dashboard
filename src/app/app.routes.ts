import {Ng2StateDeclaration} from '@uirouter/angular';
import {AppComponent} from './app.component';
import {STATES} from './consts/states';
import {DashboardsListComponent} from './dashboards-list/dashboards-list.component';
import {TaskDashboardComponent} from './task-dashboard/task-dashboard.component';
import {HeaderComponent} from './header/header.component';
import {DashboardsComponent} from './dashboards/dashboards.component';

export const appState: Ng2StateDeclaration = {
  abstract: true,
  name: STATES.APP,
  url: '',
  component: AppComponent
};

export const dashboardsState: Ng2StateDeclaration = {
  name: STATES.APP_DASHBOARDS,
  url: '/dashboards',
  component: DashboardsComponent,
  redirectTo: STATES.APP_DASHBOARDS_LIST
};

export const dashboardsListState: Ng2StateDeclaration = {
  name: STATES.APP_DASHBOARDS_LIST,
  url: '/list',
  component: HeaderComponent,
  views: {
    header: {
      component: HeaderComponent
    },
    content: {
      component: DashboardsListComponent
    }
  }
};

export const dashboardState: Ng2StateDeclaration = {
  name: STATES.APP_DASHBOARD_PROFILE,
  url: '/:boardId',
  views: {
    header: {
      component: HeaderComponent
    },
    content: {
      component: TaskDashboardComponent
    }
  }
};

export const states: Ng2StateDeclaration[] = [
  appState,
  dashboardsState,
  dashboardsListState,
  dashboardState
];
