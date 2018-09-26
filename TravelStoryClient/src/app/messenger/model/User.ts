import {Chat} from "./Chat";

export class User {
  id: number;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  socialNetworkNicks: SocialNetworksNicks;
  status: Status;
}

export enum Status {
  ONLINE,
  AWAY,
  BUSY,
  OFFLINE
}

class SocialNetworksNicks {
  facebook: string;
  twitter: string;
  instagram: string;
}


