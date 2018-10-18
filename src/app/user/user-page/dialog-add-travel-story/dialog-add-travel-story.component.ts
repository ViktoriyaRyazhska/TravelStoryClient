import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {TravelStory} from '../../../models/TravelStory';
import {TravelStoryService} from '../../../service/travel-story.service';
import {Media} from '../../../models/Media';

@Component({
  selector: 'app-dialog-add-travel-story',
  templateUrl: './dialog-add-travel-story.component.html',
  styleUrls: ['./dialog-add-travel-story.component.scss']
})
export class DialogAddTravelStoryComponent implements OnInit {
  travelStory : TravelStory = new TravelStory();
  medias : Media[] = [];
  media : Media = new Media();


  constructor(private travelStoryService: TravelStoryService) {
  }
  initMedia(){
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
    this.travelStoryService.addTravelStory(this.travelStory).subscribe();
  }
}
