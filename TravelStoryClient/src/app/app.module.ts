import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {ChatSearchPipe} from './messenger/pipes/chat-search.pipe';
import {CommentsComponent} from './user/comments/comments.component';
import {UserModule} from './user/user.module';
import {MatCardModule} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorService} from './user/login/interceptor.service';
import {MyAuthService} from './user/login/my-auth.service';
import {DialogChangeProfilePicComponent} from './user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component';
import {MessengerComponent} from './messenger/messenger.component';
import {ChatSidebarComponent} from './messenger/messenger-sidebar/chat-sidebar.component';
import {PersonalInfoComponent} from './messenger/messenger-sidebar/personal-info/personal-info.component';
import {ChatListComponent} from './messenger/messenger-sidebar/chat-list/chat-list.component';
import {MainMessagingContentComponent} from './messenger/main-messaging-content/main-messaging-content.component';
import {TestWebSocketsComponent} from './messenger/test-web-sockets/test-web-sockets.component';
import {ChatInfoComponent} from './messenger/main-messaging-content/chat-info/chat-info.component';
import {UserComponent} from './user/user.component';
import {MessengerModule} from './messenger/messenger.module';



@NgModule({
  declarations: [
    AppComponent,
    // MessengerComponent,
    // PersonalInfoComponent,
    // ChatSidebarComponent,
    // ChatListComponent,
    // MainMessagingContentComponent,
    // ChatInfoComponent,
    // TestWebSocketsComponent,
    // UserComponent,
    // ChatSearchPipe,
    // CommentsComponent,
    DialogChangeProfilePicComponent,
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    UserModule,
    AppRoutingModule,
    MessengerModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
    MyAuthService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogChangeProfilePicComponent]
})
export class AppModule {
}
