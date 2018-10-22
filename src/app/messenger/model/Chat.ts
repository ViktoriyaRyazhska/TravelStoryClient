import {Message} from "./Message";
import {User} from "./User";

export class Chat {
  id: number;
  chatName: string;
  creator: User;
  users: User[];
  avatar: string;
  alternativeAvatar: AlternativeAvatar;
  notification: boolean;
  lastMessage: Message;
  chatType: string;
  messages: Message[];
  interlocutor: User;
  description: string;
  createdAt: string;
}

export class AlternativeAvatar {
  color: string;
  letter: string;
}

// export enum ChatType {
//   PRIVATE_MESSAGES,
//   PRIVATE_GROUP,
//   PUBLIC_GROUP
// }
