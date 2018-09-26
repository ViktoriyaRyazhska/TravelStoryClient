import {Message, MessageType} from "../model/Message";
import {currUserMockup, HarveyUserMockup} from "./UserMockup";


export const messages: Message[] = [
  {
    id: 1,
    messageType: MessageType.TEXT,
    messageContent: "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!",
    author: currUserMockup,
  },
  {
    id: 2,
    messageType: MessageType.TEXT,
    messageContent: "When you're backed against the wall, break the god damn thing down.",
    author: HarveyUserMockup,
  },
  {
    id: 3,
    messageType: MessageType.TEXT, messageContent: "Excuses don't win championships.",
    author: currUserMockup,
  },
  {
    id: 4,
    messageType: MessageType.TEXT, messageContent: "Oh yeah, did Michael Jordan tell you that?",
    author: HarveyUserMockup,
  },
  {
    id: 5,
    messageType: MessageType.TEXT, messageContent: "No, I told him that.",
    author: currUserMockup,
  },
  {
    id: 6,
    messageType: MessageType.TEXT, messageContent: "What are your choices when someone puts a gun to your head?",
    author: currUserMockup,
  },
  {
    id: 7,
    messageType: MessageType.TEXT,
    messageContent: "What are you talking about? You do what they say or they shoot you.",
    author: HarveyUserMockup,
  },
  {
    id: 8,
    messageType: MessageType.TEXT,
    messageContent: "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. " +
      "Or, you do any one of a hundred and forty six other things.",
    author: currUserMockup,
  },
  {
    id: 9,
    messageType: MessageType.TEXT,
    messageContent: "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!",
    author: HarveyUserMockup,
  },
  {
    id: 123,
    messageType: MessageType.TEXT,
    messageContent: "When you're backed against the wall, break the god damn thing down.",
    author: currUserMockup,
  },
  {
    id: 11,
    messageType: MessageType.TEXT, messageContent: "Excuses don't win championships.",
    author: currUserMockup,
  },
];
