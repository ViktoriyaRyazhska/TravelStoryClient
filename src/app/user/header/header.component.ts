import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../models/User';
import {TranslateService} from '@ngx-translate/core';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User;
  lang: string;
  meId: number;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private translate: TranslateService,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.meId = this.tokenService.getUserId();
  }

  switchLanguage(lang: string) {
    console.log('Switch to language: ' + lang);
    this.userService.setPreferedLang(lang);
    this.translate.use(lang);
  }


  onChosenLang(): string {
    this.lang = this.userService.getPreferedLang();
    if (this.lang === 'en') {
      return 'en';
    }
    if (this.translate.getBrowserLang() === 'en') {
      return 'en';
    }
    return 'ua';
  }


}

