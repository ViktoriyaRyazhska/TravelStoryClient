import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {TranslateModule} from '@ngx-translate/core';
import {DashboardCrmModule} from './dashboard-crm/dashboard-crm.module';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';
import {AdminFooterComponent} from './admin-footer/admin-footer.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {SearchComponent, SearchComponentDialog} from '../search/search.component';
import {AdminSearchComponent} from './admin-header/admin-search/admin-search.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    DashboardCrmModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [AdminComponent, AdminFooterComponent, AdminHeaderComponent, AdminSearchComponent]
})
export class AdminModule {
}
