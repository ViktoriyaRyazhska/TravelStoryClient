import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeedComponent} from './feed/feed.component';
import {UserPageComponent} from './user-page/user-page.component';
import {MatIconModule} from "@angular/material";

const userRoutes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'u/:id', component: UserPageComponent}

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
