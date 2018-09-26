import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../model/Chat";
import {ActivatedRoute} from "@angular/router";
import {MessengerService} from "../services/messenger.service";
import {User} from "../model/User";
import {Message} from "../model/Message";

@Component({
  selector: 'app-main-messaging-content',
  templateUrl: './main-messaging-content.component.html',
  styleUrls: ['./main-messaging-content.component.scss', '../general.scss']
})
export class MainMessagingContentComponent implements OnInit {
  currChat: Chat;
  @Input() currUser: User;

  constructor(
    private route: ActivatedRoute,
    private messengerService: MessengerService,
  ) {
  }

  ngOnInit() {
    this.getChat();
  }

  getChat() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.currChat = this.messengerService.getChat(id);
  }



}
