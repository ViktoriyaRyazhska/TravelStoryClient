import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {TranslateService} from '@ngx-translate/core';
import {TokenService} from '../../service/token.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  public meId: number;
  private lang: string;
  public clickedTab: string;

  constructor(private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver,
              private userService: UserService,
              private translate: TranslateService,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.meId = this.tokenService.getUserId();
  }

  public switchLanguage(lang: string) {
    console.log(lang);
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

  public onClickedTab(): string {
    if (this.clickedTab === 'me') {
      return 'me';
    }
    if (this.clickedTab === 'messenger') {
      return 'messenger';
    }
    if (this.clickedTab === 'settings') {
      return 'settings';
    }
  }

  public onClickTab(tab: string) {
    this.clickedTab = tab;
  }
}
