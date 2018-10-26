import {Component, Input, OnInit} from '@angular/core';
import {Like} from '../../models/Like';
import {LikeService} from '../../service/like.service';
import {User} from '../../models/User';
import {TravelStory} from '../../models/TravelStory';
import {UserService} from '../../service/user.service';
import 'rxjs/add/observable/fromEvent';
import {TokenService} from '../../service/token.service';

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
  posibilityToLike: boolean;

  constructor(private likeService: LikeService, private userService: UserService, private tokenService: TokenService) {
  }

  ngOnInit() {

    this.posibilityToLike = true;
    this.getLoggedUser();
    this.getLikes(this.travelStory.id, this.travelStory.media[0].id);
  }

  getLoggedUser() {
    let userId = this.tokenService.getUserId();
    this.userService.getUser(userId).subscribe(user => this.loggedUser = user);
  }

  like(travelStoryId: number, mediaId: number) {
    if (this.posibilityToLike === false) {
      return;
    }
    this.getLoggedUserLike();

    if (!this.likeExist()) {
      this.loggedUserLike.userId = this.loggedUser.id;
      this.loggedUserLike.travelStoryId = travelStoryId;
      this.loggedUserLike.mediaId = mediaId;
      this.posibilityToLike = false;
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
      this.loggedUserLike = like;
      this.posibilityToLike = true;
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
