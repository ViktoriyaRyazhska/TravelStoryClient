import {Component, OnInit} from '@angular/core';
import {UserSearchDTO} from "../../models/UserSearchDTO";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-user-follows-side',
  templateUrl: './user-follows-side.component.html',
  styleUrls: ['./user-follows-side.component.scss']
})
export class UserFollowsSideComponent implements OnInit {
  followers: UserSearchDTO[];
  PageSize = 2;
  pageNumber = 0;
  userId: number;
  followersNumber: number;


  constructor(private userService: UserService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getFollowers(this.userId, this.pageNumber, this.PageSize).subscribe(data => {
      this.followers = data.content;
      this.followersNumber = data.totalElements;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FollowersComponentDialog, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'followers-component-dialog',
  templateUrl: 'followers.component.dialog.html',

})
export class FollowersComponentDialog {
  finished = false;
  followers: UserSearchDTO[];
  PageSize = 2;
  page = 0;
  userId: number;
  followersNumber: number;

  constructor(public dialogRef: MatDialogRef<UserFollowsSideComponent>, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = 1;
    this.userService.getFollowers(this.userId, this.page, this.PageSize).subscribe(data => {
      this.followers = data.content;
      this.followersNumber = data.totalElements;
    });
  }
  scrollHandler(e) {
    this.getMore();
    // should log top or bottom
  }
  getMore() {
    console.log('scrolled down!!');
    if (this.finished) return
    this.page++;
    this.userService.getFollowers(this.userId, this.page, this.PageSize).subscribe(data => {
      this.followers = this.followers.concat(data.content);
      this.finished = data['last'];
    })
  }
}
