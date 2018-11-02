import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {TranslateModule} from '@ngx-translate/core';
import {DashboardCrmModule} from './dashboard-crm/dashboard-crm.module';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    DashboardCrmModule,
    RouterModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
}
