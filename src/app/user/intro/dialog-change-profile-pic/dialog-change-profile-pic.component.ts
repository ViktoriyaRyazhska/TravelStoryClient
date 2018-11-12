import {Component, OnInit} from '@angular/core';
import {FileService} from '../../../service/file.service';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {UserPicDTO} from '../../../models/UserPicDTO';
import {TokenService} from '../../../service/token.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-change-profile-pic',
  templateUrl: './dialog-change-profile-pic.component.html',
  styleUrls: ['./dialog-change-profile-pic.component.scss']
})

export class DialogChangeProfilePicComponent implements OnInit {
  public dto: UserPicDTO;
  public isHovering: boolean;
  public percentage: Observable<number>;
  private snapshot: Observable<any>;
  private task: AngularFireUploadTask;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fileService: FileService,
    private tokenService: TokenService,
    private dialogRef: MatDialogRef<DialogChangeProfilePicComponent>
  ) {
  }

  ngOnInit() {
    this.dto = new UserPicDTO();
  }

  public onResetProfilePic() {
    this.fileService.resetProfilePic(1).subscribe((response) => {
      console.log(response);
    });
  }

  public toggleHover(event: boolean) {
    this.isHovering = event;
  }

  public startUpload(event: FileList) {

    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported  file type :( ');
    }

    const path = `prof_pic/${this.tokenService.getUserId()}_${new Date().getTime()}_${file.name}`;
    const customMetadata = {app: 'travelstory resource'};
    this.task = this.storage.upload(path, file, {customMetadata});

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.subscribe(() => {
    }, error1 => {
      console.error(error1);
    }, () => {
      this.storage.ref(path)
        .getDownloadURL()
        .subscribe(value => {
            this.dto.pictureUrl = value;
            this.dto.id = this.tokenService.getUserId();
            this.fileService.uploadProfilePic(this.dto)
              .subscribe(() => {
              });
          }, (error1) => {
            console.error(error1);
          }, () => location.reload(true)
        )
      ;
    })
    ;
  }

  public close(): void {
    this.dialogRef.close();
  }
}
