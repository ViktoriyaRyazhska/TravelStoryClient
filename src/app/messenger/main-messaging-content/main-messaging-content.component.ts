import {Component, Input, OnInit} from '@angular/core';
import {Chat} from '../model/Chat';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MessengerService} from '../services/messenger.service';
import {User} from '../model/User';
import {Message} from '../model/Message';
import * as Stomp from 'stompjs';
import * as $ from 'jquery';
import {StompService} from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-main-messaging-content',
  templateUrl: './main-messaging-content.component.html',
  styleUrls: ['./main-messaging-content.component.scss', '../general.scss']
})
export class MainMessagingContentComponent implements OnInit {
  private receivedMessage: Observable<Stomp.Message>;
  private subscription: Subscription;
  private subscribed = false;

  currChat: Chat;
  currMessage: Message = new Message();
  @Input() currUser: User;

  private container: any;

  messages: Message[] = [];
  pageNumber: number = 1;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private messengerService: MessengerService,
              private _stompService: StompService) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.subscribed) {
          this.subscription.unsubscribe();
          this.subscribed = false;
        }
        this.pageNumber = 1;
        this.getFirst30Messages();
        this.getChat();
      }
    });
  }

  ngOnInit() {
    this.container = $('#messagesContainer');
    this.currMessage.user = this.currUser;
    this.getChat();
    this.getFirst30Messages();

    //code below get previous messages
    const _this = this;
    $(document).ready(function () {
      $(_this.container).scroll(function () {
        if (_this.container.scrollTop() < 100) {
          // _this.getNext30Messages();
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.subscribed) {
      this.subscription.unsubscribe();
      this.subscribed = false;
    }
  }


  getChat() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.messengerService.getChat(id).subscribe(chat => {
      this.currChat = chat;
      if (this.currChat.avatar == null && this.currChat.interlocutor == null) {
        this.currChat.alternativeAvatar = this.messengerService.getAlternativeAvatar(this.currChat.chatName);
      }

      this.receivedMessage = this._stompService.subscribe('/chat/' + this.currChat.id + '/messages');

      if (!this.subscribed) {
        this.subscription = this.receivedMessage.subscribe(this.onNextMessage);
        this.subscribed = true;
      }

      this.container.scrollTop(this.container.prop('scrollHeight')); //scroll down
    });
  }

  public onNextMessage = (message: Stomp.Message) => {
    let castedMessage: Message = JSON.parse(message.body);
    this.messages.push(castedMessage);

    const _this = this;
    setTimeout(() => _this.container.scrollTop(_this.container.prop('scrollHeight')), 20);

    //TODO do smth with this =(
    //DOESN'T work without delay
    //this.container.scrollTop(this.container.prop('scrollHeight'));
  };


  getFirst30Messages() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.messengerService.getNext30Messages(id, 0)
      .subscribe(
        messages => {
          this.messages = messages;
        }
      );
  }


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
    if (this.currMessage.messageContent != '') {
      this.currMessage.messageType = 'TEXT';
      this.currMessage.user = this.currUser;
      this._stompService.publish('/messenger/' + this.currChat.id + '/message', JSON.stringify(this.currMessage));
      this.currMessage.messageContent = '';
    }
  }

}
