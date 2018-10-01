import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-dialog-change-profile-pic',
  templateUrl: './dialog-change-profile-pic.component.html',
  styleUrls: ['./dialog-change-profile-pic.component.scss']
})

export class DialogChangeProfilePicComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

}
