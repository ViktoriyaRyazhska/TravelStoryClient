import {Component, Input, OnInit} from '@angular/core';
import {Like} from "../../models/Like";
import {LikeService} from "../../service/like.service";
import {User} from "../../models/User";
import {TravelStory} from "../../models/TravelStory";
import {Media} from "../../models/Media";


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input() travelStory: TravelStory;
  // @Input() media: Media;
   user: User;
  likeState: boolean;
  userLike: Like;


  likes: Like[];


  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
    this.getLikes(this.travelStory.id, this.travelStory.medias[0].id);
    this.getUser();
  }

  getLikes(travelStoryId: number, mediaId: number) {
    this.likeService.getLikes(travelStoryId, mediaId)
      .subscribe(likes => this.likes = likes);
  }

  like(userLike:Like,travelStoryId:number,mediaId:number) {
    this.flipLike();
    if (this.likeState == true) {
      this.add(userLike,travelStoryId,mediaId);
    }
    else {
      this.delete(userLike);
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

  add(userLike:Like,travelStoryId:number,mediaId:number) {
    this.likeService.addLike(userLike,travelStoryId,mediaId).subscribe(like => {
      this.likes.push(like);
    });
  }

  delete(userLike:Like) {
    this.likes = this.likes.filter(h => h !== userLike);
    this.likeService.deleteLike(userLike).subscribe();
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
}
