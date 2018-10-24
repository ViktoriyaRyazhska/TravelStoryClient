import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})


export class DashboardCrmComponent implements OnInit {

  public activity;
  public dashCard = [
    {
      'colorDark': '#5C6BC0',
      'colorLight': '#7986CB',
      'number': 25,
      'title': 'USERS',
      'icon': 'room'
    },
    {
      'colorDark': '#42A5F5',
      'colorLight': '#64B5F6',
      'number': 20,
      'title': 'ONLINE',
      'icon': 'language'
    },
    {
      'colorDark': '#42A5F5',
      'colorLight': '#64B5F6',
      'number': 0,
      'title': 'TRAVELSTORIES',
      'icon': 'dashboard'
    },
    {
      'colorDark': '#66BB6A',
      'colorLight': '#81C784',
      'number': 8,
      'title': 'AVERAGE AGE',
      'icon': 'account_circle'
    }
  ];


  constructor() {
  // private _activityCardService: ActivityCardService
  }

  ngOnInit() {
    // this._activityCardService.getActivitycard().subscribe(data => this.activity = data);
  }
}
