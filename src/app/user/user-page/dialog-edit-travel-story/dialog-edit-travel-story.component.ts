import {Component, Inject, Input, OnInit} from '@angular/core';
import {TravelStory} from '../../../models/TravelStory';
import {Media} from '../../../models/Media';
import {TravelStoryService} from '../../../service/travel-story.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog-edit-travel-story',
  templateUrl: './dialog-edit-travel-story.component.html',
  styleUrls: ['./dialog-edit-travel-story.component.scss']
})
export class DialogEditTravelStoryComponent implements OnInit {
  @Input() travelStory: TravelStory;
  medias: Media[] = [];
  media: Media = new Media();

  constructor(private travelStoryService: TravelStoryService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('data', this.data);
    this.travelStory = this.data.ts;
  }

  initMedia() {
    this.media.url = 'https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-363244_1280.jpg';
    this.media.mediaType = 'IMAGE';
    this.medias.push(this.media);
  }

  ngOnInit() {
  }


  onSubmit() {
    this.initMedia();
    this.travelStory.media = this.medias;
    console.log(this.travelStory);
    this.travelStory.userId = 1;
    this.travelStoryService.editTravelStory(this.travelStory).subscribe();
  }
}
