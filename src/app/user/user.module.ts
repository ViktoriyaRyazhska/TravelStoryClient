import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {IntroComponent} from './intro/intro.component';
import {LikesComponent} from './likes/likes.component';
import {SearchComponent, SearchComponentDialog} from '../search/search.component';
import {UserRoutingModule} from './user-routing.module';
import {UserPageComponent} from './user-page/user-page.component';
import {FeedComponent} from './feed/feed.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerPostComponent} from './user-page/container-post/container-post.component';
import {CommentsComponent} from './comments/comments.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {UserInfoSideComponent} from './user-info-side/user-info-side.component';
import {
  FollowersDialogComponent,
  FollowingDialogComponent,
  UserFollowsSideComponent
} from './user-follows-side/user-follows-side.component';
import {UserGallerySideComponent} from './user-gallery-side/user-gallery-side.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule, MatMenuModule
} from '@angular/material';
import {UserComponent} from './user.component';
import {UserPlacesComponent} from './user-places/user-places.component';
import {ScrollableDirective} from './scrollable.directive';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TranslateModule} from '@ngx-translate/core';
import {DialogEditTravelStoryComponent} from './user-page/dialog-edit-travel-story/dialog-edit-travel-story.component';
import {DialogChangeBackgroundImageComponent} from './intro/dialog-change-background-image/dialog-change-background-image.component';
import {NgxLoadingModule} from 'ngx-loading';
import {MatListModule, MatIconModule} from '@angular/material';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

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
    MatCheckboxModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    TranslateModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    NgxLoadingModule.forRoot({}),
  ],
  entryComponents: [
    SearchComponentDialog,
    FollowersDialogComponent,
    FollowingDialogComponent
  ],
  declarations: [
    UserComponent,
    IntroComponent,
    UserPageComponent,
    FeedComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    ContainerPostComponent,
    LikesComponent,
    CommentsComponent,
    UserInfoSideComponent,
    UserFollowsSideComponent,
    UserGallerySideComponent,
    UserPlacesComponent,
    SearchComponentDialog,
    FollowersDialogComponent,
    FollowingDialogComponent,
    ScrollableDirective,
    UserPlacesComponent,
    SettingsPageComponent,
    DialogEditTravelStoryComponent,
    UserPlacesComponent,
    DialogChangeBackgroundImageComponent
  ]
})
export class UserModule {
}
