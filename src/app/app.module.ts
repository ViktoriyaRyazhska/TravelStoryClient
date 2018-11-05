import {BrowserModule} from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import {
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatNavList, MatPaginatorModule, MatProgressBarModule,
  MatSidenavModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './service/interceptor.service';
import {MyAuthService} from './service/my-auth.service';
import {DialogChangeProfilePicComponent} from './user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component';
import {MessengerModule} from './messenger/messenger.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DialogAddTravelStoryComponent} from './user/user-page/dialog-add-travel-story/dialog-add-travel-story.component';
import {DialogEditTravelStoryComponent} from './user/user-page/dialog-edit-travel-story/dialog-edit-travel-story.component';
import {DialogChangeBackgroundImageComponent} from './user/intro/dialog-change-background-image/dialog-change-background-image.component';

import {SecurityModule} from './security/security.module';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment.prod';
import {AngularFireModule} from '@angular/fire';
import {FileSizePipe} from './user/intro/dialog-change-profile-pic/file-size.pipe';
import {DropZoneDirective} from './user/drop-zone.directive';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {AdminModule} from './admin/admin.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SearchComponent, SearchComponentDialog} from './search/search.component';
import {FeatureTableComponent} from './admin/table/feature-table/feature-table.component';
// import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
// import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
// import {HeaderComponent} from './user/header/header.component';
// import {FooterComponent} from './user/footer/footer.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DialogChangeProfilePicComponent,
    DialogAddTravelStoryComponent,
    FileSizePipe,
    DropZoneDirective,
    FeatureTableComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule,
    MatTableModule,
    MatGridListModule,
    AdminRoutingModule,
    AdminModule,
    MatFormFieldModule,
    UserModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    AppRoutingModule,
    SecurityModule,
    MessengerModule,
    MatNativeDateModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
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
  entryComponents: [
    DialogChangeProfilePicComponent,
    DialogChangeBackgroundImageComponent,
    DialogAddTravelStoryComponent,
    DialogEditTravelStoryComponent
  ],
})
export class AppModule {
}
