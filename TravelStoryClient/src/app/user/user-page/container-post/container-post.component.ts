import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-container-post',
  templateUrl: './container-post.component.html',
  styleUrls: ['./container-post.component.scss']
})
export class ContainerPostComponent implements OnInit {
  travelStorys: [{
    id: 1,
    media: {
      id: 1
      url: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    }
    user: {
      id: 1
      avatarUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    }
  }]

  constructor
  () {
  }

  ngOnInit() {
  }

}
