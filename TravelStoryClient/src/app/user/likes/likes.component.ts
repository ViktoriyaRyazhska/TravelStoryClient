import {Component, Input, OnInit} from '@angular/core';
import {Like} from "../../models/Like";
import {LikeService} from "../../service/like.service";
import {User} from "../../models/User";
import {TravelStory} from "../../models/TravelStory";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";


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
    this.getLikes(this.travelStory.id, this.travelStory.medias[0].id);
    this.getLoggedUser();
    this.getLikeOfCurrentUser(this.travelStory.id, this.travelStory.medias[0].id, this.loggedUser.id);

    this.getLikeOfUser(this.likes,this.loggedUser.id);

  }

  like(userLike: Like, travelStoryId: number, mediaId: number) {
    this.flipLike();
    if (userLike.likeState == true) {
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
    if (this.loggedUserLike.likeState == true) {
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

  liked(likes: Like[]): number {
    let likedNumber: number;
    likedNumber = 0;
    likes.forEach(function (like) {
      if (like.likeState == true) {
        likedNumber++;
      }

    });
    return likedNumber;
  }


  getLikeOfCurrentUser(travelStoryId: number, mediaId: number, userId: number) {
    this.likeService.getUserLike(travelStoryId, mediaId, userId)
      .subscribe(like => this.loggedUserLike = like);
    {
    }
  }

  getLikeOfUser(likes: Like[], LoggedUserId: number): Like {
    let userLike: Like;
    likes.forEach(function (like) {
      if (like.loggedUserId = LoggedUserId) {
        userLike = like;
        return userLike;
      }});
      userLike = new Like();
      userLike.likeState=false;
      return userLike;
      }

}
