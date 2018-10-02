import {TravelStory} from "../../models/TravelStory";

export const TRAVELSTORYS: TravelStory[] = [
  {
    id: 1,
    medias:  [
      {
        id: 3,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }]
    ,
    head: "here is a head",
    description: "here is a description",
    createdDate:"02-05-2014",
    updatedDate:"08-06-2015"
  }, {
    id: 12,
    medias: [
      {
        id: 1,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      },
      {
        id: 2,
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }]
    ,
    head: "here is a head",
    description: "here is a description",
    createdDate:"08-05-2018",
    updatedDate:"08-06-2011"

  }]


