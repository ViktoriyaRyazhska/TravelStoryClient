import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from './service/user.service';
import {TokenService} from './service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('auth') == null) {
      this.router.navigate(['/login']);
    }
      if (this.userService.getPreferedLang() === null) {
        if (this.translate.getBrowserLang() === 'uk') {
          this.translate.use('uk');
        }
      } else if (this.userService.getPreferedLang() === 'uk') {
        this.translate.use('uk');
      } else {
        this.translate.use('en');
      }

  }
}
