import {Component, OnInit} from '@angular/core';
import {MediaService} from '../../service/media.service';
import {Media} from '../../models/Media';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-gallery-side',
  templateUrl: './user-gallery-side.component.html',
  styleUrls: ['./user-gallery-side.component.scss']
})
export class UserGallerySideComponent implements OnInit {


  constructor(private mediaService: MediaService, private route: ActivatedRoute) {
  }

  userId: number;
  medias: Media[];


  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.mediaService.getMedias(this.userId, 0, 6).subscribe(data => this.medias = data['content']);
  }
}
