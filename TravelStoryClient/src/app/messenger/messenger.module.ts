import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessengerRoutingModule} from './messenger-routing.module';
import {MessengerComponent} from "./messenger.component";
import {PersonalInfoComponent} from "./messenger-sidebar/personal-info/personal-info.component";
import {ChatSidebarComponent} from "./messenger-sidebar/chat-sidebar.component";
import {ChatListComponent} from "./messenger-sidebar/chat-list/chat-list.component";
import {MainMessagingContentComponent} from "./main-messaging-content/main-messaging-content.component";
import {ChatInfoComponent} from "./main-messaging-content/chat-info/chat-info.component";
import {ChatSearchPipe} from "./pipes/chat-search.pipe";
import {FormsModule} from "@angular/forms";
import {TestWebSocketsComponent} from "./test-web-sockets/test-web-sockets.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MessengerRoutingModule
  ],
  declarations: [
    TestWebSocketsComponent,
    MessengerComponent,
    PersonalInfoComponent,
    ChatSidebarComponent,
    ChatListComponent,
    MainMessagingContentComponent,
    ChatInfoComponent,
    ChatSearchPipe
  ]
})
export class MessengerModule {
}

