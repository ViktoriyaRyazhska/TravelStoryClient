import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {AlternativeAvatar, Chat} from "../../model/Chat";
import {MessengerService} from "../../services/messenger.service";
import {ActivatedRoute} from "@angular/router";
import {MessageWebSocketsService} from "../../services/message-web-sockets.service";
import * as Stomp from 'stompjs';
import {Observable} from "rxjs";
import {Message} from "../../model/Message";
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss', '../../general.scss']
})
export class ChatListComponent implements OnInit {
  @Input() searchQuery: string = '';
  @Input() currentUser: User;
  @Input() stompClient: Stomp;

  chats: Chat[] = [];
  friend: User;

  activeChatId: number;

  constructor(private messageWebSocketService: MessageWebSocketsService,
              private messengerService: MessengerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getChats();
    this.stompClient = this.messageWebSocketService.connect();

  }

  public getChats(): void {
    this.messengerService.getChats(this.currentUser).subscribe(
      chats => {
        this.chats = chats;
        for (let chat of this.chats) {

          if (chat.avatar == null && chat.interlocutor == null) {
            chat.alternativeAvatar = new AlternativeAvatar();
            chat.alternativeAvatar.color = this.messengerService.getAvatarColor(chat.chatName);
            chat.alternativeAvatar.letter = chat.chatName.charAt(0);
          }
          // const _this = this;
          // this.stompClient = Stomp.over(new SockJS("http://localhost:8080/messenger"));
          // this.stompClient.connect({}, function (frame) {
          //   _this.stompClient.subscribe('/messenger/' + chat.id + '/messages',
          //     function (newMessage: Message) {
          //       chat.lastMessage = newMessage;
          //     });
          //   console.log('Connected: ' + frame);
          // });
          // this.stompClient.subscribe('/messenger/' + chat.id + '/messages',
          //   function (newMessage: Message) {
          //     chat.lastMessage = newMessage;
          //   });
          // debugger;
        }
      });
  }


}
