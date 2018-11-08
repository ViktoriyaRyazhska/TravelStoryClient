import {Component, Inject, OnInit} from '@angular/core';
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

  constructor(private mediaService: MediaService,
              public dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  finished = false;

  PageSize = 2;
  page = 0;
  userId: number;
  medias: Media[];

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.mediaService.getMedias(this.userId, 0, 2).subscribe(data => this.medias = data['content']);
  }

  scrollHandler(e) {
    console.log('scrolled!');
    this.getMore();
  }

  getMore() {
    if (this.finished) {
      return;
    }
    this.page++;
    this.mediaService.getMedias(this.userId, 0, 2).subscribe((data) => {
      this.medias.concat(data['content']);
      this.finished = data['last'];
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
  mediaId: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute, dialogRef: MatDialogRef<GalleryComponent>,
              private mediaService: MediaService) {
  }

  ngOnInit() {
    this.mediaId = this.data['mediaId'];
  }

  delete() {
    this.mediaService.delete(this.mediaId);
  }

}
