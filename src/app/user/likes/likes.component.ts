import {Component, Input, OnInit} from '@angular/core';
import {Like} from "../../models/Like";
import {LikeService} from "../../service/like.service";
import {User} from "../../models/User";
import {TravelStory} from "../../models/TravelStory";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";


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


  constructor(private likeService: LikeService, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getLikes(this.travelStory.id, 1);
    this.getLoggedUser();
    // this.loggedUserLike=new Like();
    this.loggedUserLike = this.getLikeOfUser(this.likes, this.loggedUser.id);

  }

  like(userLike: Like, travelStoryId: number, mediaId: number) {
    this.flipLike();
    if (userLike.likeState === true) {
      userLike.loggedUserId = this.loggedUser.id;
      userLike.travelStoryId = travelStoryId;
      userLike.mediaId = mediaId;
      this.add(userLike);
    }
    else {
      userLike.loggedUserId = this.loggedUser.id;
      userLike.travelStoryId = travelStoryId;
      userLike.mediaId = mediaId;
      userLike.likeState = false;
      this.delete(userLike);
    }
  }

  flipLike() {
    if (this.loggedUserLike.likeState === true) {
      this.loggedUserLike.likeState = false;
    }
    else {
      this.loggedUserLike.likeState = true;
    }
  }

  getLikes(travelStoryId: number, mediaId: number) {
    this.likeService.getLikes(travelStoryId, mediaId)
      .subscribe(likes => this.likes = likes);
  }

  add(userLike: Like) {
    this.likeService.addLike(userLike).subscribe(like => {
      this.likes.push(like);
    });
  }

  delete(userLike: Like) {
    this.likes = this.likes.filter(h => h !== userLike);
    this.likeService.deleteLike(userLike).subscribe(like => this.loggedUserLike = like);
  }

  getLoggedUser(): void {
    let user = new User();
    user.id = 2;
    this.loggedUser = user;
  }


  getLikeOfUser(likes: Like[], loggedUserId: number): Like {
    let userLike: Like;
    if (likes != null) {
      for (let like of likes) {
        if (like.loggedUserId === loggedUserId) {
          debugger;
          userLike = like;
          return userLike;
        }
      }
    }
    userLike = new Like();
    userLike.likeState = false;
    return userLike;
  }

  likeExhist(likes: Like[], like: Like): boolean {
    if (likes != null) {
      for (let l of likes) {
        if (l === like) {
          return true;
        }
      }
    }
    return false;

  }
}
