import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {TranslateService} from '@ngx-translate/core';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public meId: number;
  private lang: string;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private translate: TranslateService,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.meId = this.tokenService.getUserId();
  }

  public switchLanguage(lang: string) {
    this.userService.setPreferedLang(lang);
    this.translate.use(lang);
  }

  public onChosenLang(): string {
    this.lang = this.userService.getPreferedLang();
    if (this.lang === 'en') {
      return 'en';
    }
    if (this.translate.getBrowserLang() === 'en') {
      return 'en';
    }
    return 'uk';
  }

  public logout() {
    this.tokenService.clearAccessToken();
  }
}

