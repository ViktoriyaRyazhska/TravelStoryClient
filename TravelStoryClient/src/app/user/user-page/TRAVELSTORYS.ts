import {TravelStory} from "../../models/TravelStory";
import {User} from "../../messenger/model/User";

export const TRAVELSTORYS: TravelStory[] = [
  {
    id: 1,
    medias: [
      {
        id: 1,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }]
    ,
    head: "here is a head",
    description: "here is a description",
    createdDate:"02-05-2014",
    updatedDate:"08-06-2015",
    userOwner: new User()
  }, {
    id: 2,
    medias: [
      {
        id: 1,
        url: 'https://yeella.com/files/uploads/znachok-url.png'
      },
      {
        id: 2,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }]
    ,
    head: "here is a head",
    description: "here is a description",
    createdDate:"08-05-2018",
    updatedDate:"08-06-2011",
    userOwner: new User()

  }]


