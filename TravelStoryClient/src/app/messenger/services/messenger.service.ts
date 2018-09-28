import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {chats} from '../mockups/chatsMockup';
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';
import {Chat} from '../model/Chat';
import {Message} from '../model/Message';
import {currUserMockup} from '../mockups/UserMockup';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  getChats(user: User) {
    return chats;
  }

  getChat(id: number) {
    let resChat: Chat;
    for (let chat of chats) {
      if (chat.id == id) {
        resChat = chat;
      }
    }
    return resChat;
  }

  getMessages(chatId: number) {
    let resChat: Chat;
    for (let chat of chats) {
      if (chat.id == chatId) {
        resChat = chat;
      }
    }
    debugger;
    return resChat.messages;
  }

  getCurrentUser() {
    return currUserMockup;
  }

  constructor() {
  }
}
