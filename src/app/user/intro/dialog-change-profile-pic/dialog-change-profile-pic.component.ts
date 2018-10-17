import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfilePicDto} from '../../../models/UserProfilePicDto';
import {FileService} from '../../../service/file.service';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-dialog-change-profile-pic',
  templateUrl: './dialog-change-profile-pic.component.html',
  styleUrls: ['./dialog-change-profile-pic.component.scss']
})

export class DialogChangeProfilePicComponent implements OnInit {
  userProfilePicDto: UserProfilePicDto;
  userId = '1';
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
              private fileService: FileService) {
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

  onSubmit() {
    this.userProfilePicDto.profilePic = this.image;
    console.log(this.userProfilePicDto.profilePic);
    this.userProfilePicDto.id = this.userId;
    this.fileService.uploadProfilePic(this.userProfilePicDto).subscribe((response) => {
      console.log(response);
    });
  }

  onResetProfilePic() {
    // TODO rm hardcoded id
    this.fileService.resetProfilePic(1).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.userProfilePicDto = new UserProfilePicDto();
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
    const customMetadata = {app: 'MyAngularFire-powered PWA!'};

    // The main task
    this.task = this.storage.upload(path, file, {customMetadata});

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.pipe(
      finalize(() => {
        this.downloadURL = this.storage.ref(path).getDownloadURL();
        this.userProfilePicDto.profilePic = this.downloadURL.toString();
      })
    ).subscribe(() => {
      console.log('download url: ' + this.downloadURL);
    });

  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
