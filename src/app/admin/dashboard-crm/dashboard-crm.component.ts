import {Component, OnInit} from '@angular/core';
import {DashCardService} from '../table/feature-table/DashCardService';
import {DashCard} from '../table/feature-table/DashCard';
import {Observable} from 'rxjs';
import {UsersCardService} from '../table/feature-table/UsersCardService';
import {UsersCard} from '../table/feature-table/usersCard';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})


export class DashboardCrmComponent implements OnInit {

  public card = this.getDash();
  public dashCard;
  public Card = this.getBot();
  public botCard;


  constructor(private service: DashCardService, private serviceUser: UsersCardService) {
  }

  getDash(): Observable<DashCard> {
    return this.service.getDashCard();
  }

  getBot(): Observable<UsersCard> {
    return this.serviceUser.getBotCard();
  }

  ngOnInit() {
    this.getDash().subscribe(card => {
      this.dashCard = [
        {
          'colorDark': '#5C6BC0',
          'colorLight': '#7986CB',
          'number': card.users,
          'title': 'USERS',
          'icon': 'room'
        },
        {
          'colorDark': '#42A5F5',
          'colorLight': '#64B5F6',
          'number': card.todayUsers,
          'title': 'USERS ACTIVE SINCE 24HOURS',
          'icon': 'language'
        },
        {
          'colorDark': '#42A5F5',
          'colorLight': '#64B5F6',
          'number': card.activeTravelStories,
          'title': 'ACTIVE TRAVELSTORIES',
          'icon': 'dashboard'
        },
        {
          'colorDark': '#42A5F5',
          'colorLight': '#64B5F6',
          'number': card.todayTravelStories,
          'title': 'TRAVELSTORIES CREATED TODAY',
          'icon': 'account_circle'
        }
      ];
      this.getBot().subscribe(Card => {
        this.botCard = [
          {
            'colorDark': '#5C6BC0',
            'colorLight': '#7986CB',
            'number': Card.male,
            'title': 'MALE',
            'icon': 'room'
          },
          {
            'colorDark': '#42A5F5',
            'colorLight': '#64B5F6',
            'number': Card.female,
            'title': 'FEMALE',
            'icon': 'language'
          },
          {
            'colorDark': '#42A5F5',
            'colorLight': '#64B5F6',
            'number': Card.userAverageAge,
            'title': 'AVERAGE AGE OF USER',
            'icon': 'dashboard'
          },
          {
            'colorDark': '#42A5F5',
            'colorLight': '#64B5F6',
            'number': Card.older18Years,
            'title': 'ADULT USERS',
            'icon': 'account_circle'
          },
        ];

      });
    });
  }
}
