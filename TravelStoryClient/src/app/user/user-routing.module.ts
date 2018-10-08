import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeedComponent} from './feed/feed.component';
import {UserPageComponent} from './user-page/user-page.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';


const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'feed', component: FeedComponent},
      {path: 'user/:id', component: UserPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'settings', component: SettingsPageComponent}
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
