import {Component, OnInit} from '@angular/core';

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
  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'not-specified', viewValue: 'Not specified'}
  ];


  constructor() {
  }

  ngOnInit() {
  }


}
