import {Pipe, PipeTransform} from '@angular/core';
import {Chat} from "../model/Chat";

@Pipe({name: 'chatSearch'})
export class ChatSearchPipe implements PipeTransform {
  transform(chats: Chat[], term: string): any[] {
    return chats.filter(function (chat) {
      let currName = chat.name;
      return currName.toLowerCase().startsWith(term.toLowerCase());
    });
  }
}
