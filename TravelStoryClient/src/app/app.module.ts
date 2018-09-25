import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ChatComponent} from "./chat/chat.component";
import {PersonalInfoComponent} from "./chat/chat-sidebar/personal-info/personal-info.component";
import {ChatSidebarComponent} from "./chat/chat-sidebar/chat-sidebar.component";
import {ChatListComponent} from "./chat/chat-sidebar/chat-list/chat-list.component";
import {MainMessagingContentComponent} from "./chat/main-messaging-content/main-messaging-content.component";
import {ChatInfoComponent} from "./chat/main-messaging-content/chat-info/chat-info.component";
import { ChatSearchComponent } from './chat/chat-sidebar/chat-search/chat-search.component';
import { TestWebSocketsComponent } from './test-web-sockets/test-web-sockets.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
// import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PersonalInfoComponent,
    ChatSidebarComponent,
    ChatListComponent,
    MainMessagingContentComponent,
    ChatInfoComponent,
    ChatSearchComponent,
    TestWebSocketsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
    // ModalModule.forRoot()
  ],
  providers: [],
  // exports: [BsDropdownModule, TooltipModule, ModalModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
