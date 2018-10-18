import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {MatDialog} from '@angular/material';
import {DialogChangeProfilePicComponent} from './dialog-change-profile-pic/dialog-change-profile-pic.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  changeProfilePic() {
    this.dialog.open(DialogChangeProfilePicComponent, {
      height: '400px',
      width: '600px',
    });
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user =>{
        this.user = user;
      } );
  }
}
