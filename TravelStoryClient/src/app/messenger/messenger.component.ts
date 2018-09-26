import {Component, OnInit} from '@angular/core';
import {currUserMockup} from "./mockups/UserMockup";
import {User} from "./model/User";
import {Chat} from "./model/Chat";
import {MessengerService} from "./services/messenger.service";


@Component({
  selector: 'app-chat',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  currentUser: User;
  currentChat: Chat;

  constructor(
    private messengerService: MessengerService
  ) {
  }

  ngOnInit(): void {
    this.getCurrUser();
  }

  getCurrUser() {
    this.currentUser = this.messengerService.getCurrentUser();
  }

}
