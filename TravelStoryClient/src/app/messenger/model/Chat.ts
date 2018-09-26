import {Message} from "./Message";
import {User} from "./User";

export class Chat {
  id: number;
  name: string;
  members: User[];
  notification: boolean;
  chatType: ChatType;
  messages: Message[];
  interlocutor: User;
}

export enum ChatType {
  PRIVATE_MESSAGES,
  PRIVATE_GROUP,
  PUBLIC_GROUP
}
