import {Component, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import {} from 'googlemaps';

@Component({
  selector: 'app-user-places',
  templateUrl: './user-places.component.html',
  styleUrls: ['./user-places.component.scss']
})
export class UserPlacesComponent implements OnInit {

  constructor() {
  }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
