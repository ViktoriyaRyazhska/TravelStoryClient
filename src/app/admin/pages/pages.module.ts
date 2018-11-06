import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PagesRouterModule} from './pages.routes';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {CoreModule} from '../../core/core.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    CoreModule,
    PagesRouterModule,
    MatGridListModule
  ],
  declarations: [
    ContactComponent,
    AboutComponent
  ],
  exports: [],
  providers: []
})
export class PagesModule {
}
