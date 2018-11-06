import {Component, OnInit} from '@angular/core';
import {TravelStory} from '../../../models/TravelStory';
import {TravelStoryService} from '../../../service/travel-story.service';
import {Media} from '../../../models/Media';
import {FileService} from '../../../service/file.service';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-dialog-add-travel-story',
  templateUrl: './dialog-add-travel-story.component.html',
  styleUrls: ['./dialog-add-travel-story.component.scss']
})
export class DialogAddTravelStoryComponent implements OnInit {
  travelStory: TravelStory = new TravelStory();
  medias: Media[] = [];
  media: Media = new Media();
  // Main task
  task: AngularFireUploadTask;

// Process monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // State for dropzone CSS toggling
  isHovering: boolean;


  constructor(private travelStoryService: TravelStoryService, private storage: AngularFireStorage,
              private db: AngularFirestore,
              private fileService: FileService, private tokenService: TokenService) {
  }

  initMedia() {
    this.media.mediaType = 'IMAGE';
    this.medias[0] = this.media;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.initMedia();
    this.travelStory.media = this.medias;
    console.log(this.travelStory);
    this.travelStory.userId = 1;
    this.travelStoryService.addTravelStory(this.travelStory).subscribe();
    location.reload(true);
  }

  uploadBackgroundPic() {
    this.fileService.resetBackgroundPic(this.tokenService.getUserId()).subscribe((response) => {
      console.log(response);
    });
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported  file type :( ');
    }

    // The storage path
    const path = `${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = {app: 'travelstory resource'};

    // The main task
    this.task = this.storage.upload(path, file, {customMetadata});

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.subscribe(() => {
      },
      error1 => console.error(error1),
      () => {
        this.storage.ref(path)
          .getDownloadURL()
          .subscribe(value => {
              this.media.url = value;
              console.log(value);
            }, (error1) => {
              console.error(error1);
            }
          );
      });
  }
}
