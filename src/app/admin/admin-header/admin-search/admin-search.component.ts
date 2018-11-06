import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Observable, Subject} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {UserService} from '../../../service/user.service';
import {UserSearchDTO} from '../../../models/UserSearchDTO';
import {PagableUserSearch} from '../../../models/PagableUserSearch';
import {SearchComponentDialog} from '../../../search/search.component';


@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.scss']
})
export class AdminSearchComponent implements OnInit {

  constructor(public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchComponentDialog, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

