import { Component, OnInit } from '@angular/core';
import {STATES} from '../consts/states';

@Component({
  selector: 'app-dashboards-list',
  templateUrl: './dashboards-list.component.html',
  styleUrls: ['./dashboards-list.component.css']
})
export class DashboardsListComponent implements OnInit {

  postProfileState = STATES.APP_DASHBOARD_PROFILE;

  constructor() { }

  ngOnInit() {
  }

}
