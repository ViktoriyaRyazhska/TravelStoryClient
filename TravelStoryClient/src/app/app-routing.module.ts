import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {MessengerComponent} from "./messenger/messenger.component";
import {TestWebSocketsComponent} from "./test-web-sockets/test-web-sockets.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'messenger', redirectTo:"messenger/chat/1"},
  {path: 'messenger/chat/:id', component: MessengerComponent},
  {path: 'testwebsocket', component: TestWebSocketsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
