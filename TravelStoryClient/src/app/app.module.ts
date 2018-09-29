import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MessengerComponent} from './messenger/messenger.component';
import {PersonalInfoComponent} from './messenger/messenger-sidebar/personal-info/personal-info.component';
import {ChatSidebarComponent} from './messenger/messenger-sidebar/chat-sidebar.component';
import {ChatListComponent} from './messenger/messenger-sidebar/chat-list/chat-list.component';
import {MainMessagingContentComponent} from './messenger/main-messaging-content/main-messaging-content.component';
import {ChatInfoComponent} from './messenger/main-messaging-content/chat-info/chat-info.component';
import {TestWebSocketsComponent} from './messenger/test-web-sockets/test-web-sockets.component';
import {AppRoutingModule} from './app-routing.module';
import {UserComponent} from './user/user.component';
import {RouterModule} from '@angular/router';
import {ChatSearchPipe} from './messenger/pipes/chat-search.pipe';
import {UserModule} from './user/user.module';




// import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MessengerComponent,
    PersonalInfoComponent,
    ChatSidebarComponent,
    ChatListComponent,
    MainMessagingContentComponent,
    ChatInfoComponent,
    TestWebSocketsComponent,
    UserComponent,
    ChatSearchPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    UserModule,
    AppRoutingModule,



    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
    // ModalModule.forRoot()
  ],
  providers: [],
  // exports: [BsDropdownModule, TooltipModule, ModalModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
