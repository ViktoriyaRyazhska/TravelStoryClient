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
import {InterceptorService} from './service/interceptor.service';
import {MyAuthService} from './service/my-auth.service';
import {DialogChangeProfilePicComponent} from './user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component';
import {MessengerModule} from './messenger/messenger.module';
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SecurityModule} from './security/security.module';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment.prod';
import {AngularFireModule} from '@angular/fire';
import {FileSizePipe} from './user/intro/dialog-change-profile-pic/file-size.pipe';
import {DropZoneDirective} from './user/drop-zone.directive';
import {DialogChangeBackgroundImageComponent} from './user/intro/dialog-change-background-image/dialog-change-background-image.component';
import { AuthComponent } from './admin/auth/auth.component';
import { CoreModule } from './core/core.module';
import { DashboardCrmComponent } from './admin/dashboard-crm/dashboard-crm.component';
import {MatSidenavModule} from '@angular/material';
// import {MatSidenav} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {MatIconModule} from '@angular/material';
import {Ng2OdometerModule} from 'ng2-odometer';
import {DashcardComponent} from './admin/dashboard-widget/dashcard/dashcard.component';
import {BarGraphComponent} from './admin/dashboard-widget/bar-graph/bar-graph.component';

// import { TableComponent } from './table/table.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DialogChangeProfilePicComponent,
    FileSizePipe,
    DropZoneDirective,
    AuthComponent,
    DashboardCrmComponent,
    DashcardComponent,
    BarGraphComponent,
    // MatSidenav,
   // TableComponent,
  ],
  imports: [
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    UserModule,
    AppRoutingModule,
    SecurityModule,
    MessengerModule,
    CoreModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatSidenavModule,
    MatToolbarModule,
    PerfectScrollbarModule,
    Ng2OdometerModule,
    MatIconModule,
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
  entryComponents: [DialogChangeProfilePicComponent, DialogChangeBackgroundImageComponent]
})
export class AppModule {
}
