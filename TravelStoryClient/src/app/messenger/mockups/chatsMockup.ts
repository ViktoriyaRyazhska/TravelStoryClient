import {Chat, ChatType} from "../model/Chat";
import {Status, User} from "../model/User";
import {MessageType} from "../model/Message";
import {messages} from "./messagesMockUp";
import {HarveyUserMockup} from "./UserMockup";


export const chats: Chat[] = [
  {
    id: 1,
    name: "Chat1",
    members: null,
    notification: false,
    chatType: ChatType.PRIVATE_MESSAGES,
    messages: messages,
    interlocutor: HarveyUserMockup
  },
  {
    id: 2,
    name: "3Chat",
    members: null,
    notification: false,
    chatType: ChatType.PRIVATE_MESSAGES,
    messages: messages,
    interlocutor: HarveyUserMockup
  },
  {
    id: 3,
    name: "SDA",
    members: null,
    notification: false,
    chatType: ChatType.PRIVATE_MESSAGES,
    messages: messages,
    interlocutor: HarveyUserMockup
  },
  {
    id: 4,
    name: "asdas",
    members: null,
    notification: false,
    chatType: ChatType.PRIVATE_MESSAGES,
    messages: messages,
    interlocutor: HarveyUserMockup
  },
  {
    id: 1,
    name: "ASDSA",
    members: null,
    notification: false,
    chatType: ChatType.PRIVATE_MESSAGES,
    messages: messages,
    interlocutor: HarveyUserMockup
  },
  {
    id: 2,
    name: "zxc",
    members: null,
    notification: false,
    chatType: ChatType.PRIVATE_MESSAGES,
    messages: messages,
    interlocutor: HarveyUserMockup
  },
  {
    id: 3,
    name: "ASD",
    members: null,
    notification: false,
    chatType: ChatType.PRIVATE_MESSAGES,
    messages: messages,
    interlocutor: HarveyUserMockup
  },
  {
    id: 4,
    name: "ASD",
    members: null,
    notification: false,
    chatType: ChatType.PRIVATE_MESSAGES,
    messages: messages,
    interlocutor: HarveyUserMockup
  },
];
