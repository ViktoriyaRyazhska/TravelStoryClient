import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeedComponent} from './feed/feed.component';
import {UserPageComponent} from './user-page/user-page.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from "./user.component";


const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: 'feed', component: FeedComponent},
      {path: ':id', component: UserPageComponent},
      {path: 'login', component: LoginComponent}
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
