import {Media} from "./Media";
import {User} from "../messenger/model/User";
import {Like} from "./Like";

export class TravelStory {
  id: number;
  medias:Media[];
  head:string;
  description:string;
  userOwner: User;
  createdDate:string;
}
