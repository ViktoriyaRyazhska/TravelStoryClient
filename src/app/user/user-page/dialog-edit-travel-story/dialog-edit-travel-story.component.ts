import {Component, Inject, Input, OnInit} from '@angular/core';
import {TravelStory} from '../../../models/TravelStory';
import {Media} from '../../../models/Media';
import {TravelStoryService} from '../../../service/travel-story.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FileService} from '../../../service/file.service';


@Component({
  selector: 'app-dialog-edit-travel-story',
  templateUrl: './dialog-edit-travel-story.component.html',
  styleUrls: ['./dialog-edit-travel-story.component.scss']
})
export class DialogEditTravelStoryComponent implements OnInit {
  @Input() travelStory: TravelStory;
  medias: Media[] = [];
  media: Media = new Media();
  fileToUpload: File;
  myReader: FileReader;
  image: string;

  constructor(private travelStoryService: TravelStoryService,private fileService: FileService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('data', this.data);
    this.travelStory = this.data.ts;
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
    this.travelStory.userId = 1;
    this.travelStoryService.editTravelStory(this.travelStory).subscribe();
  }
}
