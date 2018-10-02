import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeedComponent} from './feed/feed.component';
import {UserPageComponent} from './user-page/user-page.component';
import {MatIconModule} from "@angular/material";
import {CreateTravelStoryComponent} from "./user-page/create-travel-story/create-travel-story.component";

const userRoutes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'u/:id', component: UserPageComponent},
  {path: 'user', component: UserPageComponent},
  {path:'createTravelStory',component: CreateTravelStoryComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),

  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule {
}
