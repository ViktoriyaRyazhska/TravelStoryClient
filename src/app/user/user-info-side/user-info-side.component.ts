import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-info-side',
  templateUrl: './user-info-side.component.html',
  styleUrls: ['./user-info-side.component.scss']
})
export class UserInfoSideComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser(1).subscribe(user => this.user = user);
  }
}
