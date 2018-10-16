import {UserSearchDTO} from "./UserSearchDTO";

export class PagableUserSearch {
  content: UserSearchDTO[];
  last: boolean;
}
