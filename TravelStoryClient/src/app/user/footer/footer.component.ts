import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  switchLanguage() {
    console.log('Switch to language: ' + this.language);
    this.translate.use(this.language);
  }


}
