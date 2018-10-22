import {Component, OnInit} from '@angular/core';
import {User} from "./model/User";
import {Chat} from "./model/Chat";
import {MessengerService} from "./services/messenger.service";
import {MessageWebSocketsService} from "./services/message-web-sockets.service";
import * as Stomp from 'stompjs';


@Component({
  selector: 'app-chat',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  currentUser: User;
  currentChat: Chat;
  stompClient: Stomp;

  constructor(
    private messageWebSocketService: MessageWebSocketsService,
    private messengerService: MessengerService
  ) {
  }

  ngOnInit(): void {
    //this.stompClient = this.messageWebSocketService.connect();

    this.getCurrUser();

  }

  ngOnDestroy() {
    this.messageWebSocketService.disconnect();
  }


  getCurrUser() {
    this.messengerService.getCurrentUser().subscribe(user => {
        this.currentUser = user;
      }
    );
  }

}
