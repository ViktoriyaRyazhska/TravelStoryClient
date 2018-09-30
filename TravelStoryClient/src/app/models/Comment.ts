export class Comment {

  userName: string;
  massage: string;
  createdTime: string;
  userAvatarUrl: string;

  constructor( userName: string, massage: string, createdTime: string, userAvatarUrl: string) {
    this.userName = userName;
    this.massage = massage;
    this.createdTime = createdTime;
    this.userAvatarUrl = userAvatarUrl;
  }
}


