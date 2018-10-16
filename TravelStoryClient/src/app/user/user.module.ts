import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {IntroComponent} from './intro/intro.component';
import {LikesComponent} from './likes/likes.component';
import {SearchComponent, SearchComponentDialog} from './search/search.component';
import {UserRoutingModule} from './user-routing.module';
import {UserPageComponent} from './user-page/user-page.component';
import {FeedComponent} from './feed/feed.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerPostComponent} from './user-page/container-post/container-post.component';
import {CommentsComponent} from "./comments/comments.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { UserInfoSideComponent } from './user-info-side/user-info-side.component';
import { UserFollowsSideComponent } from './user-follows-side/user-follows-side.component';
import { UserGallerySideComponent } from './user-gallery-side/user-gallery-side.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {
  MatBadgeModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {UserComponent} from './user.component';
import { UserPlacesComponent } from './user-places/user-places.component';
import { EmojiModule } from 'angular-emoji/dist';
import {InfiniteScrollModule} from "ngx-infinite-scroll";



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
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatBadgeModule,
    EmojiModule,
    InfiniteScrollModule

  ],
  entryComponents:[
    SearchComponentDialog
  ],
  declarations: [
    UserComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    SearchComponent,
    UserPageComponent,
    FeedComponent,
    ContainerPostComponent,
    LikesComponent,
    CommentsComponent,
    UserInfoSideComponent,
    UserFollowsSideComponent,
    UserGallerySideComponent,
    LoginComponent,
    RegistrationComponent,
    UserPlacesComponent,
    SearchComponentDialog,


  ]
})
export class UserModule {
}
