import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {TravelStory} from '../../../models/TravelStory';


@Component({
  selector: 'app-container-post',
  templateUrl: './container-post.component.html',
  styleUrls: ['./container-post.component.scss']
})
export class ContainerPostComponent implements OnInit {
  @Input() travelStory: TravelStory;
  @Input() user: User;

  constructor
  () {
  }

  ngOnInit() {


  }

}
