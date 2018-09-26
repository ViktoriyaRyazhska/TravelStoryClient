import {User} from "./User";

export class Message {
  id: number;
  messageContent: string;
  messageType: MessageType;
  author_id: number;
}

export enum MessageType {
  TEXT,
  PHOTO,
  VIDEO,
  AUDIO
}
