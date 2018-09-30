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
  @Input() travelStoryId: number;
  @Input() mediaId: number;


  likes: Like[];


  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
    this.getLikes();
  }

  getLikes(travelStoryId: number, mediaId: number) {
    this.likeService.getLikes(travelStoryId: number, mediaId: number)
      .subscribe(likes => this.likes = likes);
  }

  like() {
    this.likesNumber = 1;
  }


  add(): void {

    this.likeService.addLike({like} as Like)
      .subscribe(like => {
        this.likes.push(like);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
