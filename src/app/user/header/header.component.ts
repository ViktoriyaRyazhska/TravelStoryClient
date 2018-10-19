import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../models/User';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User;
  lang: string;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private translate: TranslateService) {
  }

  switchLanguage(lang: string) {
    console.log('Switch to language: ' + lang);
    this.userService.setPreferedLang(lang);
    this.translate.use(lang);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
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

