import {Component, OnInit} from '@angular/core';
import {FileService} from '../../../service/file.service';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {UserPicDTO} from '../../../models/UserPicDTO';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-dialog-change-background-image',
  templateUrl: './dialog-change-background-image.component.html',
  styleUrls: ['./dialog-change-background-image.component.scss']
})

export class DialogChangeBackgroundImageComponent implements OnInit {
  userProfilePicDto: UserPicDTO;
  fileToUpload: File;
  myReader: FileReader;
  image: string;

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

  onChange(files: FileList) {
    this.fileToUpload = files.item(0);
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
    const path = `test/${new Date().getTime()}_${file.name}`;

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
            this.userProfilePicDto.profilePic = value;
            console.log(value);
          }, (error1) => {
            console.error(error1);
          }, () => {
            this.userProfilePicDto.id = this.tokenService.getUserId().toString();
            this.fileService.uploadProfilePic(this.userProfilePicDto)
              .subscribe((response) => {
                console.log(response);
                location.reload(true);
              });
            console.log(this.userProfilePicDto.profilePic);
          }
        );
    });
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
