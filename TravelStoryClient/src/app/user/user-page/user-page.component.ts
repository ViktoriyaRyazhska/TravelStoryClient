import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {TravelStory} from "../../models/TravelStory";
import {TRAVELSTORYS} from "./TRAVELSTORYS";
import {LikeService} from "../../service/like.service";
import {TravelStoryService} from "../../service/travel-story.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit {
  user: User;
  travelStories: TravelStory[];

  constructor(
    private travelStoryService: TravelStoryService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    //this.getTravelStories(this.user.id);
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  // getTravelStories(userId:number ) {
  //   this.travelStoryService.getTravelStories(userId)
  //     .subscribe(travelStories => this.travelStories = travelStories);
  // }
  getTravelStories() {
    return this.travelStories = TRAVELSTORYS;
  }

}
