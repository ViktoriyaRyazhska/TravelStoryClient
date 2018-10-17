import {Component, OnInit} from '@angular/core';
import {UserSearchDTO} from "../../models/UserSearchDTO";
import {Observable} from "rxjs";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-follows-side',
  templateUrl: './user-follows-side.component.html',
  styleUrls: ['./user-follows-side.component.scss']
})
export class UserFollowsSideComponent implements OnInit {
  followers: UserSearchDTO[];
  PageSize=6;
  pageNumber=1;


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers(this.pageNumber,this.PageSize).subscribe(data=>{
      this.followers =data.content;
    });
  }



}
