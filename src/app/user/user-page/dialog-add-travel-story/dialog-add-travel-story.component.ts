import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {TravelStory} from '../../../models/TravelStory';
import {TravelStoryService} from '../../../service/travel-story.service';
import {Media} from '../../../models/Media';
import {MatDialog} from '@angular/material';
import {DialogChangeProfilePicComponent} from '../../intro/dialog-change-profile-pic/dialog-change-profile-pic.component';
import {FileService} from '../../../service/file.service';

@Component({
  selector: 'app-dialog-add-travel-story',
  templateUrl: './dialog-add-travel-story.component.html',
  styleUrls: ['./dialog-add-travel-story.component.scss']
})
export class DialogAddTravelStoryComponent implements OnInit {
  travelStory : TravelStory = new TravelStory();
  medias : Media[] = [];
  media : Media = new Media();
  fileToUpload: File;
  myReader: FileReader;
  image: string;


  constructor(private travelStoryService: TravelStoryService,private fileService: FileService) {
  }
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    this.fileToUpload = inputValue.files[0];
    this.myReader = new FileReader();

    this.myReader.onloadend = (e) => {
      this.image = this.myReader.result;
    };
    this.myReader.readAsDataURL(this.fileToUpload);
  }
  initMedia(){
    this.media.url = this.image;
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
