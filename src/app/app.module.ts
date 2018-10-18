import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import {MatCardModule, MatNativeDateModule} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './user/login/interceptor.service';
import {MyAuthService} from './user/login/my-auth.service';
import {DialogChangeProfilePicComponent} from './user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component';
import {MessengerModule} from './messenger/messenger.module';
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {DialogAddTravelStoryComponent} from './user/user-page/dialog-add-travel-story/dialog-add-travel-story.component';
import {DialogEditTravelStoryComponent} from './user/user-page/dialog-edit-travel-story/dialog-edit-travel-story.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DialogChangeProfilePicComponent,
    DialogAddTravelStoryComponent,
  ],
  imports: [
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    UserModule,
    AppRoutingModule,
    MessengerModule,
    MatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    MyAuthService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogChangeProfilePicComponent, DialogAddTravelStoryComponent,DialogEditTravelStoryComponent]
})
export class AppModule {
}
