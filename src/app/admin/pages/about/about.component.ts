import { Component, OnInit } from '@angular/core';
import {UserService} from '../../table/feature-table/userService';
import {User} from '../../table/feature-table/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: User[];

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }

  getUsers(): void {
    this.userService.getUser()
      .subscribe(users => {
        console.log(users);
        return this.users = users;
      });
  }
}
