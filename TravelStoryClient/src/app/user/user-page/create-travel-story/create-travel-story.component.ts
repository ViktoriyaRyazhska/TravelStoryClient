import { Component, OnInit } from '@angular/core';
import {TravelStory} from "../../../models/TravelStory";
import {TravelStoryService} from "../../../service/travel-story.service";
import {TRAVELSTORYS} from "../TRAVELSTORYS";

@Component({
  selector: 'app-create-travel-story',
  templateUrl: './create-travel-story.component.html',
  styleUrls: ['./create-travel-story.component.scss']
})
export class CreateTravelStoryComponent implements OnInit {
travelStory:TravelStory;
travelStories:TravelStory[];
  constructor(private travelStoryService:TravelStoryService ) {
    this.travelStories = TRAVELSTORYS;
  }

  ngOnInit() {
  }
  onAdd(head: string,description:string): void {
    this.travelStory.head = head;
    this.travelStory.description = head;
    this.travelStoryService.addTravelStory(this.travelStory)
      .subscribe(travelStory => {
        this.travelStories.push(travelStory);
      });
  }

}
