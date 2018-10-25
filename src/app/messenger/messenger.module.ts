import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessengerRoutingModule} from './messenger-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TestWebSocketsComponent} from './test-web-sockets/test-web-sockets.component';
import {MessengerComponent} from './messenger.component';
import {PersonalInfoComponent} from './messenger-sidebar/personal-info/personal-info.component';
import {ChatSidebarComponent} from './messenger-sidebar/chat-sidebar.component';
import {ChatListComponent} from './messenger-sidebar/chat-list/chat-list.component';
import {MainMessagingContentComponent} from './main-messaging-content/main-messaging-content.component';
import {ChatInfoComponent} from './main-messaging-content/chat-info/chat-info.component';
import {ChatSearchPipe} from './pipes/chat-search.pipe';
import {TranslateModule} from '@ngx-translate/core';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';
import {HeaderComponent} from '../user/header/header.component';

const WS_URL = 'http://localhost:8080/ws';

export function socketProvider(): SockJS {
  return new SockJS(WS_URL);
}

const stompConfig: StompConfig = {
  // Which server?
  url: socketProvider,

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    //some headers
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MessengerRoutingModule,
    TranslateModule,
  ],
  declarations: [
    TestWebSocketsComponent,
    MessengerComponent,
    PersonalInfoComponent,
    ChatSidebarComponent,
    ChatListComponent,
    MainMessagingContentComponent,
    ChatInfoComponent,
    ChatSearchPipe,
  ],
  providers: [
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ]
})
export class MessengerModule {
}

