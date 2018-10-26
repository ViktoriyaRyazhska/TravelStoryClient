import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoogleMapComponent} from './google-map/google-map.component';

const mapsRoutes: Routes = [
  {path: 'googlemap', component: GoogleMapComponent, data: {animation: 'googlemap'}}
];

@NgModule({
  imports: [
    RouterModule.forChild(mapsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MapsRouterModule {
}
