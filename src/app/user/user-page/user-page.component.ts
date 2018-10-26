import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {TravelStory} from '../../models/TravelStory';
import {TranslateService} from '@ngx-translate/core';
import {TravelStoryService} from '../../service/travel-story.service';
import {MatDialog} from '@angular/material';
import {DialogAddTravelStoryComponent} from './dialog-add-travel-story/dialog-add-travel-story.component';
import {DialogEditTravelStoryComponent} from './dialog-edit-travel-story/dialog-edit-travel-story.component';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit {
  user: User;
  travelStories: TravelStory[];
  travelStory: TravelStory;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private translate: TranslateService,
    private travelStoryService: TravelStoryService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.getUser();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user;
        this.getTravelStories(user);
      });
  }

  getTravelStories(user: User): void {
    this.travelStoryService.getTravelStoriesByUser(user.id).subscribe((travelStories) => {
      this.travelStories = travelStories;
    });
  }

  delete(travelStory: TravelStory): void {
    this.travelStories = this.travelStories.filter(ts => ts !== travelStory);
    this.travelStoryService.deleteTravelStory(travelStory.id).subscribe();
  }

  addTravelStory() {
    this.dialog.open(DialogAddTravelStoryComponent, {
      height: '500px',
      width: '700px',
    });
  }

  editTravelStory(travelStory: TravelStory) {
    this.dialog.open(DialogEditTravelStoryComponent, {
      data: {
        ts: travelStory
      },
      height: '500px',
      width: '700px',
    });
  }
}
