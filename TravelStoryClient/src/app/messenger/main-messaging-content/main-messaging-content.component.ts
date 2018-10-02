import {Component, Input, OnInit} from '@angular/core';
import {AlternativeAvatar, Chat} from "../model/Chat";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MessengerService} from "../services/messenger.service";
import {User} from "../model/User";
import {Message} from "../model/Message";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {ChatListComponent} from "../messenger-sidebar/chat-list/chat-list.component";

@Component({
  selector: 'app-main-messaging-content',
  templateUrl: './main-messaging-content.component.html',
  styleUrls: ['./main-messaging-content.component.scss', '../general.scss']
})
export class MainMessagingContentComponent implements OnInit {
  currChat: Chat;
  currMessage: Message = new Message();
  @Input() currUser: User;
  @Input() stompClient: Stomp;

  messages: Message[];
  pageNumber: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messengerService: MessengerService,
  ) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.getMessages();
        this.getChat()
      }
    });
  }

  ngOnInit() {
    this.getChat();
    this.getMessages();
  }


  getChat() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.messengerService.getChat(id).subscribe(chat => {
      this.currChat = chat;
      this.currMessage.messageType = "TEXT";
      this.currMessage.user = this.currUser;

      if (this.currChat.avatar == null && this.currChat.interlocutor == null) {
        this.currChat.alternativeAvatar = new AlternativeAvatar();
        this.currChat.alternativeAvatar.color = this.messengerService.getAvatarColor(this.currChat.chatName);
        this.currChat.alternativeAvatar.letter = this.currChat.chatName.charAt(0);
      }

      const _this = this;
      this.stompClient = Stomp.over(new SockJS("http://localhost:8080/ws"));
      this.stompClient.connect({}, function (frame) {
        _this.stompClient.subscribe('/chat/' + chat.id + '/messages',
          function (newMessage) {
            let message = JSON.parse(newMessage.body);
            let castedMessage = new Message();
            let user = new User();
            castedMessage.user = user = message.user;
            castedMessage.messageContent = message.messageContent;
            castedMessage.messageType = message.messageType;
            castedMessage.createdAt = message.createdAt;
            _this.messages.push(castedMessage);


          });
        console.log('Connected: ' + frame);
      });
    });
  }

  getMessages() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.messengerService.getMessages(id, this.pageNumber)
      .subscribe(
        messages => {
          this.messages = messages;
          //   debugger;
        }
      );
    //this.pageNumber++;
  }

  sendMessage() {
    this.stompClient.send(
      '/messenger/' + this.currChat.id + '/message',
      {},
      JSON.stringify(this.currMessage)
    );

  }


}
