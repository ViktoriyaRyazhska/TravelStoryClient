import {Injectable} from '@angular/core';
import {Chat} from "../model/Chat";
import {User} from "../model/User";
import {chats} from "../mockups/chatsMockup";

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  getChats(user: User) {
    return chats;
  }

  constructor() {
  }
}
