import {Component, OnInit} from '@angular/core';
import {Like} from "./Like";
import {LikeService} from "../like.service";


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  likesNumber: number;
  likes: Like[];


  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
    this.getLikes();
  }

  getLikes() {
    this.likeService.getLikes()
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
