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
import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatProgressSpinnerModule} from '@angular/material';
import {MatInputModule} from '@angular/material/typings/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    FeedComponent
  ]
})
export class UserModule {
}
