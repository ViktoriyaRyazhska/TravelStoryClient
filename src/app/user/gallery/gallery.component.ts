import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MediaService} from '../../service/media.service';
import {ActivatedRoute} from '@angular/router';
import {Media} from '../../models/Media';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  finished: boolean;
  pageSize = 1;
  page = 0;
  userId: number;
  medias: Media[];

  constructor(private mediaService: MediaService,
              public dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.finished = false;
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.mediaService.getMedias(this.userId, this.page, this.pageSize).subscribe(data => this.medias = data.content);
  }

  getMore() {
    console.log('clicked!');
    if (this.finished) {
      return;
    }
    this.page++;
    this.mediaService.getMedias(this.userId, this.page, this.pageSize).subscribe(data => {
      this.medias = this.medias.concat(data.content);
      this.finished = data.last;
    });
  }

  openDialog(media: Media): void {
    const dialogRef = this.dialog.open(MediaDialogComponent, {
      width: '1000px',
      data: {'media': media}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });


  }

  openDialogDeletion(mediaId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {'mediaId': mediaId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    const sub = dialogRef.componentInstance.onDelete.subscribe((data: any) => {
      console.log(data);
      this.delete(data);
    });
  }

  delete(data: any) {
    this.medias = this.medias.filter(media => media.id !== data);
    this.mediaService.delete(data).subscribe();
  }

}

@Component({
  selector: 'app-media-component-dialog',
  templateUrl: 'media.component.dialog.html',

})
export class MediaDialogComponent implements OnInit {
  contentType: string;
  userId: number;
  media: Media;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute, dialogRef: MatDialogRef<GalleryComponent>) {
  }

  ngOnInit() {
    this.contentType = 'MEDIA';
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.media = this.data['media'];
  }


}


@Component({
  selector: 'app-confirm-component-dialog',
  templateUrl: 'confirm.component.dialog.html',

})
export class ConfirmationDialogComponent implements OnInit {
  @Output() onDelete = new EventEmitter<any>(true);
  mediaId: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute, public  dialogRef: MatDialogRef<GalleryComponent>,
              private mediaService: MediaService) {
  }

  ngOnInit() {
    this.mediaId = this.data['mediaId'];

  }

  closeDialog() {
    this.dialogRef.close();
  }

  delete(data: any) {
    this.onDelete.emit(data);
    this.dialogRef.close();
  }
}
