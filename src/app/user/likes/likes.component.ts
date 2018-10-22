import {Component, Input, OnInit} from '@angular/core';
import {Like} from "../../models/Like";
import {LikeService} from "../../service/like.service";
import {User} from "../../models/User";
import {TravelStory} from "../../models/TravelStory";
import {UserService} from "../../service/user.service";
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input() travelStory: TravelStory;
  loggedUser: User;
  loggedUserLike: Like;
  likes: Like[];

  constructor(private likeService: LikeService, private userService: UserService) {
  }

  ngOnInit() {
    this.getLikes(this.travelStory.id, this.travelStory.medias[0].id);
    this.getLoggedUser();
  }

  getLoggedUser() {
    this.loggedUser = new User();
    this.loggedUser.id = 1;
  }

  like(travelStoryId: number, mediaId: number) {
    this.getLoggedUserLike();

    if (!this.likeExist()) {
      this.loggedUserLike.userId = this.loggedUser.id;
      this.loggedUserLike.travelStoryId = travelStoryId;
      this.loggedUserLike.mediaId = mediaId;
      this.add();
    }
    else {
      this.delete();
    }
  }

  getLikes(travelStoryId: number, mediaId: number) {
    this.likeService.getLikes(travelStoryId, mediaId)
      .subscribe(likes => this.likes = likes);
  }

  getLoggedUserLike(): void {
    this.loggedUserLike = new Like();
    this.loggedUserLike.userId = this.loggedUser.id;
    for (let l of this.likes) {
      if (l.userId == this.loggedUser.id) {
        this.loggedUserLike = l;
      }
    }
  }

  add() {
    this.likeService.addLike(this.loggedUserLike).subscribe(like => {
      this.likes.push(like);
      this.loggedUserLike=like;
    });
  }

  delete() {
    this.likes = this.likes.filter(like => like !== this.loggedUserLike);
    this.likeService.deleteLike(this.loggedUserLike).subscribe(like => this.loggedUserLike = like);
  }

  likeExist(): boolean {
    for (let l of this.likes) {
      if (l.userId == this.loggedUserLike.userId) {
        return true;
      }
    }
    return false;
  }

}
