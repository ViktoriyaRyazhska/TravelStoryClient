import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from './user-page/user-page.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {UserComponent} from './user.component';
import {GalleryComponent} from './gallery/gallery.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'settings', component: SettingsPageComponent},
      {path: 'user/:id', component: UserPageComponent},
      {path: 'user/:id/gallery', component: GalleryComponent},
      {path: '', redirectTo: 'admin/component', pathMatch: 'full'},

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),

  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule {
}
