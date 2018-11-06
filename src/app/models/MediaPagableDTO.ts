import {UserSearchDTO} from './UserSearchDTO';
import {Media} from './Media';

export class MediaPagableDTO {
  content: Media[];
  last: boolean;
  totalElements: number;
}
