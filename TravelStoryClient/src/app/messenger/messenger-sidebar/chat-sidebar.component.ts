import {Component, Input, OnInit} from '@angular/core';
import {User} from "../model/User";
import {currUserMockup} from "../mockups/UserMockup";


@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss', '../general.scss']
})
export class ChatSidebarComponent implements OnInit {
  @Input() currentUser: User;
  chatsSearchQuery: string = 'A';

  constructor() {
  }

  ngOnInit() {
  }
}
