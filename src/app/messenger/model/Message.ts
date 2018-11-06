import {User} from './User';

export class Message {
  id: number;
  messageContent: string;
  messageType: string;
  createdAt: string;
  user: User;
}

// export enum MessageType {
//   TEXT,
//   PHOTO,
//   VIDEO,
//   AUDIO
// }
