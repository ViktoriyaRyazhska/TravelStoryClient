import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {MessengerComponent} from './messenger/messenger.component';
import {TestWebSocketsComponent} from './messenger/test-web-sockets/test-web-sockets.component';
import {FeedComponent} from './user/feed/feed.component';

const routes: Routes = [
  {path: '', redirectTo: 'feed', pathMatch: 'full'},
  {path: 'messenger', redirectTo: 'messenger/chat/1'},
  {path: 'messenger/chat/:id', component: MessengerComponent},
  {path: 'testwebsocket', component: TestWebSocketsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
