import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/User';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss', '../general.scss']
})
export class ChatSidebarComponent implements OnInit {
  @Input() stompClient: Stomp;
  @Input() currentUser: User;
  chatsSearchQuery: string = '';

  constructor() {
  }

  ngOnInit() {
  }
}
