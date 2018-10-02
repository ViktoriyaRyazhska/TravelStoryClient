import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {IntroComponent} from './intro/intro.component';
import {LikesComponent} from './likes/likes.component';
import {SearchComponent} from './search/search.component';
import {UserRoutingModule} from './user-routing.module';
import {UserPageComponent} from './user-page/user-page.component';
import {FeedComponent} from './feed/feed.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerPostComponent} from './user-page/container-post/container-post.component';
import {CommentsComponent} from "./comments/comments.component";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from "@angular/material/typings/icon";

import { UserInfoSideComponent } from './user-info-side/user-info-side.component';
import { UserFollowsSideComponent } from './user-follows-side/user-follows-side.component';
import { UserGallerySideComponent } from './user-gallery-side/user-gallery-side.component';
import { TravelStoryComponent } from './travel-story/travel-story.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,


  ],
  declarations: [FooterComponent,
    HeaderComponent,
    IntroComponent,
    LikesComponent,
    SearchComponent,
    UserPageComponent,
    FeedComponent,
    ContainerPostComponent,
    CommentsComponent,
    UserInfoSideComponent,
    UserFollowsSideComponent,
    UserGallerySideComponent,
    TravelStoryComponent
  ]
})
export class UserModule {
}
