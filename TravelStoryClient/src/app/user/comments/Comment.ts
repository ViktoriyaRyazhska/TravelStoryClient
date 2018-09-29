export class Comment {
  id: number;
  userName: string;
  massage: string;
  criatedTime: string;
  userAvatarUrl: string;

  constructor(id: number, userName: string, massage: string, criatedTime: string, userAvatarUrl: string) {
    this.id = id;
    this.userName = userName;
    this.massage = massage;
    this.criatedTime = criatedTime;
    this.userAvatarUrl = userAvatarUrl;
  }
}


