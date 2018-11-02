import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material';

import {DashboardCrmModule} from '../dashboard-crm/dashboard-crm.module';
import {CoreModule} from '../../core/core.module';
import {appRoutes} from './lazyloader.routes';
import {TablesModule} from '../table/tables.module';
import {TablesRouterModule} from '../table/tables.router';


@NgModule({
  imports: [
    TablesModule,
    TablesRouterModule,
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    CoreModule,
    DashboardCrmModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule {
}
