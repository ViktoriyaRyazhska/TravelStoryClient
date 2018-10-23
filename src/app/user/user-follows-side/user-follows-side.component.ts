import {Component, Inject, OnInit} from '@angular/core';
import {UserSearchDTO} from '../../models/UserSearchDTO';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-user-follows-side',
  templateUrl: './user-follows-side.component.html',
  styleUrls: ['./user-follows-side.component.scss']
})
export class UserFollowsSideComponent implements OnInit {
  followers: UserSearchDTO[];
  following: UserSearchDTO[];
  PageSize = 7;
  pageNumber = 0;
  userId: number;
  followersNumber: number;
  followingNumber: number;


  constructor(private userService: UserService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getFollowers(this.userId, this.pageNumber, this.PageSize).subscribe(data => {
      this.followers = data.content;
      this.followersNumber = data.totalElements;
    });

    this.userService.getFollowing(this.userId, this.pageNumber, this.PageSize).subscribe(data => {
      this.following = data.content;
      this.followingNumber = data.totalElements;
    });
  }

  openDialogFollowers(): void {
    const dialogRef = this.dialog.open(FollowersComponentDialog, {
      width: '800px',
      data: {'userId': this.userId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogFollowing(): void {
    const dialogRef = this.dialog.open(FollowingComponentDialog, {
      width: '800px',
      data: {'userId': this.userId}
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
  PageSize = 4;
  page = 0;
  userId: number;
  followersNumber: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UserFollowsSideComponent>, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.data['userId'];
    this.userService.getFollowers(this.userId, this.page, this.PageSize).subscribe(data => {
      this.followers = data.content;
      this.followersNumber = data.totalElements;
    });
  }

  scrollHandler(e) {
    this.getMore();
  }

  getMore() {
    console.log('scrolled down!!');
    if (this.finished) return;
    this.page++;
    this.userService.getFollowers(this.userId, this.page, this.PageSize).subscribe(data => {
      this.followers = this.followers.concat(data.content);
      this.finished = data['last'];
    });
  }
}

@Component({
  selector: 'following-component-dialog',
  templateUrl: 'following.component.dialog.html',

})
export class FollowingComponentDialog {
  finished = false;
  following: UserSearchDTO[];
  PageSize = 4;
  page = 0;
  userId: number;
  followingNumber: number;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UserFollowsSideComponent>, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.data['userId'];
    this.userService.getFollowing(this.userId, this.page, this.PageSize).subscribe(data => {
      this.following = data.content;
      this.followingNumber = data.totalElements;
    });
  }

  scrollHandler(e) {
    this.getMore();
  }

  getMore() {
    if (this.finished) return;
    this.page++;
    this.userService.getFollowing(this.userId, this.page, this.PageSize).subscribe(data => {
      this.following = this.following.concat(data.content);
      this.finished = data['last'];
    });
  }
}
