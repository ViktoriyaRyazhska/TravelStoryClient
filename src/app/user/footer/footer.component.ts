import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language: string;

  constructor(private translate: TranslateService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  switchLanguage() {
    console.log('Switch to language: ' + this.language);
    this.userService.setPreferedLang(this.language);
    this.translate.use(this.language);
  }

}
