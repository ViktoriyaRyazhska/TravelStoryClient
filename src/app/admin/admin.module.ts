import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {TranslateModule} from '@ngx-translate/core';
import {DashboardCrmModule} from './dashboard-crm/dashboard-crm.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DashboardCrmModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
}
