import {Component, OnInit} from '@angular/core';
import {FileService} from '../../../service/file.service';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {UserPicDTO} from '../../../models/UserPicDTO';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-dialog-change-profile-pic',
  templateUrl: './dialog-change-profile-pic.component.html',
  styleUrls: ['./dialog-change-profile-pic.component.scss']
})

export class DialogChangeProfilePicComponent implements OnInit {
  userProfilePicDto: UserPicDTO;

// Main task
  task: AngularFireUploadTask;

// Process monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore,
              private fileService: FileService,
              private tokenService: TokenService,
  ) {
  }

  onResetProfilePic() {
    this.fileService.resetProfilePic(1).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.userProfilePicDto = new UserPicDTO();
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
    const path = `prof_pic/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = {app: 'travelstory resource'};

    // The main task
    this.task = this.storage.upload(path, file, {customMetadata});

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.subscribe(() => {
      this.storage.ref(path)
        .getDownloadURL()
        .subscribe(value => {
            this.userProfilePicDto.pic = value;
            this.userProfilePicDto.id = this.tokenService.getUserId();
            this.fileService.uploadProfilePic(this.userProfilePicDto)
              .subscribe((response) => {
                console.log(response);
                location.reload(true);
              });
            console.log(this.userProfilePicDto.pic);
            console.log(value);
          }, (error1) => {
            console.error(error1);
          }
        );
    });
  }

}
