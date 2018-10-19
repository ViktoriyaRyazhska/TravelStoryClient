import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../service/token.service';

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  private id: number;

  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'not-specified', viewValue: 'Not specified'}
  ];


  constructor(private tokenService: TokenService) {
  }

  ngOnInit() {
    this.id = this.tokenService.getUserId();
  }


}
