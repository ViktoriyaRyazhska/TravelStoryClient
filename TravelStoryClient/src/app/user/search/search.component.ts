import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UserSearchDTO} from "../../models/UserSearchDTO";
import {UserService} from "../../service/user.service";
import {Observable, Subject} from "rxjs";
import {debounceTime, switchMap} from "rxjs/operators";
import {PagableUserSearch} from "../../models/PagableUserSearch";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchComponentDialog, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'search-component-dialog',
  templateUrl: 'search.component.dialog.html',
})
export class SearchComponentDialog {
  private searchTerms = new Subject<string>();
  page: number;
  finished = false;
  pageSize: number;
  term: string;
  data: Observable<PagableUserSearch>;
  users: UserSearchDTO[];

cd
  constructor(public dialogRef: MatDialogRef<SearchComponent>, private userService: UserService) {
  }

  search(term: string): void {
    this.term = term;
    this.page = 0;
    this.finished = false;
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pageSize = 7;
     this.data=this.searchTerms.pipe(
      debounceTime(300),
      switchMap((term: string) => this.userService.searchUsers(term, this.page, this.pageSize))
    );
   this.data.subscribe(data=>{
   this.users=data.content;
   this.finished=data.last})
  }

  getMore() {
    if (this.finished) return
    this.page++;
    this.userService.searchUsers(this.term, this.page, this.pageSize).subscribe(data => {
      this.users = this.users.concat(data.content);
      this.finished = data['last'];
    })
  }
}

