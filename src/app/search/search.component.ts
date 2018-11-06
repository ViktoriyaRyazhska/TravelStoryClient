import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Observable, Subject} from 'rxjs';
import {PagableUserSearch} from '../models/PagableUserSearch';
import {UserSearchDTO} from '../models/UserSearchDTO';
import {UserService} from '../service/user.service';
import {debounceTime, switchMap} from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public dialog: MatDialog,
  ) {
  }

  ngOnInit() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
@Component({
  selector: 'app-search-component-dialog',
  templateUrl: 'search.component.dialog.html',
})
export class SearchDialogComponent implements OnInit {

  private searchTerms = new Subject<string>();
  page: number;
  finished = false;
  pageSize: number;
  term: string;
  data: Observable<PagableUserSearch>;
  users: UserSearchDTO[];
  showSquirrel: boolean;
  squirrelCounter: number;


  constructor(public dialogRef: MatDialogRef<SearchComponent>, private userService: UserService) {
  }

  search(term: string): void {
    this.term = term;
    this.page = 0;
    this.finished = false;
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.showSquirrel = false;
    this.squirrelCounter = 0;
    this.pageSize = 3;
    this.data = this.searchTerms.pipe(
      debounceTime(300),
      switchMap((term: string) => this.userService.searchUsers(term, this.page, this.pageSize))
    );
    this.data.subscribe(data => {
      this.users = data.content;
      this.finished = data.last;
    });
  }

  getMore() {
    if (this.finished) {
      return;
    }
    this.page++;
    this.userService.searchUsers(this.term, this.page, this.pageSize).subscribe(data => {
      this.users = this.users.concat(data.content);
      this.finished = data['last'];
    });
  }

  countSquirrels() {
    this.squirrelCounter = this.squirrelCounter + 1;
    console.log(this.squirrelCounter.toString());
    if (this.squirrelCounter > 15) {
      this.showSquirrel = true;
    }
  }
}
