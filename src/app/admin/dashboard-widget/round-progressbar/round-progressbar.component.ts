import {Component, Input, OnInit} from '@angular/core';
import {UsersCard} from '../../table/feature-table/usersCard';
import {UsersCardService} from '../../table/feature-table/UsersCardService';

@Component({
  selector: 'cdk-round-progressbar',
  templateUrl: './round-progressbar.component.html',
  styleUrls: ['./round-progressbar.component.scss']
})
export class RoundProgressbarComponent implements OnInit {
  @Input() current;
  @Input() max;
  @Input() background;
  @Input() color;
  @Input() boxcolor;
  @Input() title;


  userCard: UsersCard;
  public radius = 250;
  public stroke = '20';
  public semicircle = false;
  public rounded = true;
  public clockwise = false;
  public responsive = true;
  public duration = '800';
  public animation = 'easeInOutQuart';
  public male;
  public female;
  public activeThisWeek;
  public averageAge;


  constructor(private service: UsersCardService) {
  }

  /*  getCards(): void {
      this.service.getUsersCard()
        .subscribe(data => {
          this.userCard = data;
          this.male = this.userCard.male;
          this.female = this.userCard.female;
          this.activeThisWeek = this.userCard.activeThisWeek;
          this.averageAge = this.userCard.userAverageAge;
          this.getOverlayStyle();
        });
    }*/

  ngOnInit() {
    /*this.getCards();*/
  }


  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 7 + 'px'
    };
  }

}
