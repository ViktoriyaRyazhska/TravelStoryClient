import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Status, User} from "../../model/User";
import {Chat, ChatType} from "../../model/Chat";
import {MessengerService} from "../../services/messenger.service";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss', '../../general.scss']
})
export class ChatListComponent implements OnInit {
  @Input() searchQuery: string = '';
  @Input() currentUser: User;
  chats: Chat[];
  chatTypes = ChatType;
  statusTypes = Status;
  friend: User;

  constructor(messengerService: MessengerService) {
    this.chats = messengerService.getChats(this.currentUser);
  }

  ngOnInit() {
  }

}
