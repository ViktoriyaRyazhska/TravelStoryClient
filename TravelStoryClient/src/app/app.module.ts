import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import {MatCardModule} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './user/login/interceptor.service';
import {MyAuthService} from './user/login/my-auth.service';
import {DialogChangeProfilePicComponent} from './user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component';
import {MessengerModule} from './messenger/messenger.module';

@NgModule({
  declarations: [
    AppComponent,
    DialogChangeProfilePicComponent,

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
  entryComponents: [DialogChangeProfilePicComponent]
})
export class AppModule {
}
