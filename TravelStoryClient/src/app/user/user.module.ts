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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserInfoSideComponent } from './user-info-side/user-info-side.component';
import { UserFollowsSideComponent } from './user-follows-side/user-follows-side.component';
import { UserGallerySideComponent } from './user-gallery-side/user-gallery-side.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [FooterComponent,
    HeaderComponent,
    IntroComponent,
    LikesComponent,
    SearchComponent,
    UserPageComponent,
    FeedComponent,
    UserInfoSideComponent,
    UserFollowsSideComponent,
    UserGallerySideComponent
  ]
})
export class UserModule {
}
