export class User {
  id: number;
  profilePic: string;
  firstName: string;
  lastName: string;
  socialNetworks: SocialNetwork[];
  email: string;
  userState: string;

  // getSocialNetworkNickBySocialNetworkName(socialNetworkName: string): string {
  //   let nickName: string;
  //
  //   for (let socialNetwork of this.socialNetworks) {
  //     if (socialNetwork.socialNetworkName === socialNetworkName) {
  //       nickName = socialNetwork.nickName;
  //     }
  //   }
  //
  //   return nickName;
  // }
}

//
// export enum Status {
//   ONLINE,
//   AWAY,
//   BUSY,
//   OFFLINE
// }

class SocialNetwork {
  id: number;
  socialNetworkName: string;
  urlToHomePage: string;
  nickName: string;
}


