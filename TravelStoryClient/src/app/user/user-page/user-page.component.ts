import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {TravelStory} from "../../models/TravelStory";
import {TRAVELSTORYS} from "./TRAVELSTORYS";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit {
  user: User;
  travelStories: TravelStory[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUser();
    this.getTravelStories();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  getTravelStories() {
    return this.travelStories = TRAVELSTORYS;
  }

}
