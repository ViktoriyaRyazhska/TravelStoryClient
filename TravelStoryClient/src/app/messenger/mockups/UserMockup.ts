import {Status, User} from "../model/User";
import {Chat, ChatType} from "../model/Chat";
import {MessageType} from "../model/Message";
import {chats} from "./chatsMockup";
import {messages} from "./messagesMockUp";

export const currUserMockup: User = {
  id: 100,
  avatarUrl: "http://emilcarlsson.se/assets/mikeross.png",
  firstName: "Mike",
  lastName: "Ross",
  status: Status.ONLINE,
  socialNetworkNicks: {
    facebook: "mikeross",
    twitter: "ross81",
    instagram: "mike.ross"
  },
};

export const HarveyUserMockup: User = {
  id: 2,
  firstName: "Harvey",
  lastName: "Specter",
  avatarUrl: "http://emilcarlsson.se/assets/harveyspecter.png",
  socialNetworkNicks: {facebook: "mikeross", twitter: "ross81", instagram: "mike.ross"},
  status: Status.BUSY
};
