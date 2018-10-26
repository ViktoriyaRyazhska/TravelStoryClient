import {Component, OnInit, ViewChild} from '@angular/core';
import {AgmMap, MapsAPILoader} from '@agm/core';

@Component({
  selector: 'cdk-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 49.832987;
  lng: number = 23.997630;
  zoom: number = 8;
  height: string = '500px';
  @ViewChild('mapContainer') mapContainer: any;
  @ViewChild(AgmMap) private myMap: any;

  constructor(private mapsAPILoader: MapsAPILoader) {
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.mapContainer.nativeElement.offsetHeight);
      // let h = this.mapContainer.nativeElement.offsetHeight - 10;
      // this.height = String(h) + 'px';
    }, 300);
  }

  ngDoCheck() {
    // let h = this.mapContainer.nativeElement.offsetHeight - 10;
    // this.height = String(h) + 'px';
  }

}
