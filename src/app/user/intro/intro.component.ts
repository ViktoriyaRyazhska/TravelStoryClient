import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {MatDialog} from '@angular/material';
import {DialogChangeProfilePicComponent} from './dialog-change-profile-pic/dialog-change-profile-pic.component';
import {DialogChangeBackgroundImageComponent} from './dialog-change-background-image/dialog-change-background-image.component';

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
      height: '430px',
      width: '500px',
    });
  }

  changeBackgroundImage() {
    this.dialog.open(DialogChangeBackgroundImageComponent, {
      height: '430px',
      width: '500px',
    });
  }


  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('user id: ' + id);
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
}

