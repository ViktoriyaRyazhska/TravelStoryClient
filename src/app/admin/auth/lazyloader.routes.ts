import {Routes} from '@angular/router';
import {AuthComponent} from './auth.component';

export const appRoutes: Routes = [{
  path: '', component: AuthComponent, children: [
    {path: 'tables', loadChildren: '../table/tables.module#TablesModule'},
    {path: 'maps', loadChildren: '../maps/maps.module#MapsModule'},
    {path: 'pages', loadChildren: '../pages/pages.module#PagesModule'}
  ]
}];
