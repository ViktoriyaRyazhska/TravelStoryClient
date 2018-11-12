import {fromEvent as observableFromEvent} from 'rxjs';

import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExampleDatabase, ExampleDataSource, TABLE_HELPERS} from './helpers.data';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {UserService} from './userService';

@Component({
  selector: 'feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss']
})
export class FeatureTableComponent implements OnInit {

  showNavListCode;
  displayedColumns = ['userId', 'userName', 'email', 'dateOfBirth', 'dateOfRegistration', 'gender', 'lastActivity'];
  exampleDatabase = new ExampleDatabase();
  selection = new SelectionModel<string>(true, []);
  dataSource: ExampleDataSource | null;
  allfeatures = TABLE_HELPERS;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  users: User[];
  private online: string;

  constructor(private http: HttpClient, private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
      debounceTime(150),
      distinctUntilChanged(), )
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  isUserOnline(user): boolean {
    this.online = 'ONLINE';
    if (user === this.online) {
      return true;
    } else {
      return false;
    }
  }

  public isUsersUnloaded(): boolean {
    if ((this.users.length < 1)) {
      return true;
    } else {
      return false;
    }
  }

  isAllSelected(): boolean {
    if (!this.dataSource) {
      return false;
    }
    if (this.selection.isEmpty()) {
      return false;
    }

    if (this.filter.nativeElement.value) {
      return this.selection.selected.length == this.dataSource.renderedData.length;
    } else {
      return this.selection.selected.length == this.exampleDatabase.data.length;
    }
  }

  masterToggle() {
    if (!this.dataSource) {
      return;
    }

    if (this.isAllSelected()) {
      this.selection.clear();
    } else if (this.filter.nativeElement.value) {
      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
    } else {
      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
    }
  }

  getUsers(): void {
    this.userService.getUser()
      .subscribe(users => {
        console.log(users);
        return this.users = users;
      });
  }

}
