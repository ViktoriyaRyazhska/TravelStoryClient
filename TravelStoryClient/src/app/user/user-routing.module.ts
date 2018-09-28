import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserModule} from './user.module';
import {UserComponent} from './user.component';
import {MessengerComponent} from '../messenger/messenger.component';
import {TestWebSocketsComponent} from '../messenger/test-web-sockets/test-web-sockets.component';
import {FeedComponent} from './feed/feed.component';
import {UserPageComponent} from './user-page/user-page.component';

const userRoutes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'user/:id', component: UserPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule {
}
