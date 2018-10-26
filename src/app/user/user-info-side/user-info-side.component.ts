import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-user-info-side',
  templateUrl: './user-info-side.component.html',
  styleUrls: ['./user-info-side.component.scss']
})
export class UserInfoSideComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user,
        error1 => console.error(error1),
        () => {
          this.translate.onLangChange.subscribe(() => {
            this.setGenderLocally();
          });
          this.setGenderLocally();
        });
  }

  setGenderLocally(): void {
    if (this.translate.currentLang === 'uk') {
      if (this.user.gender === 'MALE' || this.user.gender === 'Чоловік' || this.user.gender === 'Male') {
        this.user.gender = 'Чоловік';
      } else if (this.user.gender === 'Female' || this.user.gender === 'FEMALE' || this.user.gender === 'Жінка') {
        this.user.gender = 'Жінка';
      }
    }
    if (this.translate.currentLang === 'en') {
      if (this.user.gender === 'MALE' || this.user.gender === 'Male' || this.user.gender === 'Чоловік') {
        this.user.gender = 'Male';
      } else if (this.user.gender === 'Female' || this.user.gender === 'FEMALE' || this.user.gender === 'Жінка') {
        this.user.gender = 'Female';
      }
    }
  }
}
