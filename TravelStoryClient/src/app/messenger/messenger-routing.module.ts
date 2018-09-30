import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MessengerComponent} from "./messenger.component";
import {TestWebSocketsComponent} from "./test-web-sockets/test-web-sockets.component";

const messengerRoutes: Routes = [
  {path: 'messenger', redirectTo:"messenger/chat/1"},
  {path: 'messenger/chat/:id', component: MessengerComponent},
  {path: 'testwebsocket', component: TestWebSocketsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(messengerRoutes)

  ],
  declarations: []
})
export class MessengerRoutingModule { }
