export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  userRole: string;
  userStatus: string;
  registrationDate: string;
  lastUpdateDate: string;
  gender: string;
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
