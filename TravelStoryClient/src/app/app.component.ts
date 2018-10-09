import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService,
              userService: UserService) {
    console.log('browser language: ' + this.translate.getBrowserLang());

    if (userService.getPreferedLang() === null) {
      if (translate.getBrowserLang() === 'uk' || this.translate.getBrowserLang() === 'ru') {
        translate.use('uk');
      }
    } else if (userService.getPreferedLang() === 'uk' || userService.getPreferedLang() === 'ru') {
      translate.use('uk');
    } else {
      translate.use('en');
    }
  }
}
