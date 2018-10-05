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
    this.getLoggedUserLike();
  }

  getLoggedUser() {
    this.loggedUser=new User();
    this.loggedUser.id = 1;

  }

  like(travelStoryId: number, mediaId: number) {
    if (!this.likeExhist()) {
      let newLike: Like = new Like();
      newLike.userId = this.loggedUser.id;
      newLike.travelStoryId = travelStoryId;
      newLike.mediaId = mediaId;
      this.loggedUserLike = newLike;
      this.add();
    }
    else {
      this.delete(this.loggedUserLike);
    }
  }

  getLoggedUserLike(): void {
    this.loggedUserLike = new Like();
    if (this.likes !== null) {
      for (let l of this.likes) {
        if (l.userId == this.loggedUser.id) {
          this.loggedUserLike = l;
        }
      }
    }
  }

  getLikes(travelStoryId: number, mediaId: number) {
    this.likeService.getLikes(travelStoryId, mediaId)
      .subscribe(likes => this.likes = likes);

  }

  add() {
    this.likeService.addLike(this.loggedUserLike).subscribe(like => {
      this.likes.push(like);
    });
  }

  delete(userLike: Like) {
    this.likes = this.likes.filter(h => h !== userLike);
    this.likeService.deleteLike(userLike).subscribe(like => this.loggedUserLike = like);
  }

  likeExhist(): boolean {
    debugger;
    let k = this.likes.indexOf(this.loggedUserLike);
    for (let l of this.likes) {
      if (l.userId == this.loggedUserLike.userId) {

        return true;
      }
    }
    return false;
  }

}
