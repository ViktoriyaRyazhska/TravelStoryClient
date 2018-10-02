import {Component, Input, OnInit} from '@angular/core';
import {AlternativeAvatar, Chat} from "../model/Chat";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MessengerService} from "../services/messenger.service";
import {User} from "../model/User";
import {Message} from "../model/Message";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';

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

  private container;

  messages: Message[] = [];
  pageNumber: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messengerService: MessengerService,
  ) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.pageNumber = 1;
        this.getFirst30Messages();
        this.getChat();
      }
    });
  }

  ngOnInit() {
    this.getChat();
    this.getFirst30Messages();

    this.container = $("#messagesContainer");

    const _this = this;

    setTimeout(function () {
      _this.container.scrollTop(_this.container.prop("scrollHeight"));//scroll down
    }, 500);

    $(document).ready(function () {
      $(_this.container).scroll(function () {
        if (_this.container.scrollTop() < 100) {
          // _this.getNext30Messages();
        }
      });
    });
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

            if (_this.messages[_this.messages.length - 1].messageContent != castedMessage.messageContent
              || _this.messages[_this.messages.length - 1].user.id != castedMessage.user.id) {
              _this.messages.push(castedMessage);
            }

            setTimeout(function () {
              _this.container.scrollTop(_this.container.prop("scrollHeight"));
            }, 200)

          });
        console.log('Connected: ' + frame);
      });


    });
  }

  getFirst30Messages() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.messengerService.getNext30Messages(id, 0)
      .subscribe(
        messages => {
          this.messages = messages;
        }
      );
  }

  //
  //
  // getNext30Messages(pageNumber: number) {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.messengerService.getNext30Messages(id, this.pageNumber)
  //     .subscribe(
  //       messages => {
  //         for (let message of messages) {
  //           this.messages.push(message);
  //         }
  //
  //       }
  //     );
  //   this.pageNumber++;
  // }

  sendMessage() {
    if (this.currMessage.messageContent != "") {
      this.stompClient.send(
        '/messenger/' + this.currChat.id + '/message',
        {},
        JSON.stringify(this.currMessage)
      );
      this.currMessage.messageContent = "";
    }
  }

}
