import {Component, Input, OnInit} from '@angular/core';
import {Like} from "../../models/Like";
import {LikeService} from "../../service/like.service";
import {User} from "../../models/User";
import {TravelStory} from "../../models/TravelStory";


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input() travelStory: TravelStory;
  @Input() user: User;
  likeState: boolean;
  userLike: Like;


  likes: Like[];


  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
    this.getLikes(this.travelStory.id, this.travelStory.medias[0].id);
  }

  getLikes(travelStoryId: number, mediaId: number) {
    this.likeService.getLikes(travelStoryId, mediaId)
      .subscribe(likes => this.likes = likes);
  }

  like() {
    this.flipLike();
    if (this.likeState == true) {
      this.add();
    }
    else {
      this.delete();

    }

  }

  flipLike() {
    if (this.likeState == true) {
      this.likeState = false;
    }
    else {
      this.likeState = true;

    }

  }

  add() {
    this.likeService.addLike(this.userLike).subscribe(like => {
      this.likes.push(like);
    });
  }

  delete() {
    this.likes = this.likes.filter(h => h !== this.userLike);
    this.likeService.deleteLike(this.userLike).subscribe();
  }

}
