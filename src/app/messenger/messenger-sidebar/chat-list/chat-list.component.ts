import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {Chat} from '../../model/Chat';
import {MessengerService} from '../../services/messenger.service';
import {ActivatedRoute} from '@angular/router';
import {MessageWebSocketsService} from '../../services/message-web-sockets.service';
import * as Stomp from 'stompjs';
import {StompService} from '@stomp/ng2-stompjs';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss', '../../general.scss']
})
export class ChatListComponent implements OnInit {
  @Input() searchQuery: string = '';
  @Input() currentUser: User;
  @Input() stompClient: Stomp;

  private receivedLastMessages: Observable<Stomp.Message>[] = [];
  private subscriptions: Subscription[] = [];

  chats: Chat[] = [];
  friend: User;

  activeChatId: number;

  constructor(private messageWebSocketService: MessageWebSocketsService,
              private messengerService: MessengerService,
              private route: ActivatedRoute,
              private _stompService: StompService) {
  }

  ngOnInit() {
    this.getChats();
    this.stompClient = this.messageWebSocketService.connect();

  }

  public getChats(): void {
    this.messengerService.getChats(this.currentUser).subscribe(
      chats => {
        this.chats = chats;
        this.chats.forEach((chat, index) => {
          if (chat.avatar == null && chat.interlocutor == null) {
            chat.alternativeAvatar = this.messengerService.getAlternativeAvatar(chat.chatName);
          }
          this.receivedLastMessages[index] = this._stompService.subscribe('/chat/' + chat.id + '/messages');
          this.subscriptions[index] = this.receivedLastMessages[index].subscribe((message: Stomp.Message) => {
            this.chats[index].lastMessage = JSON.parse(message.body);
          });
        });
      });
  }
}
