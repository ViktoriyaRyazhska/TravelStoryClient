import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material';

import {DashboardCrmModule} from '../dashboard-crm/dashboard-crm.module';
import {CoreModule} from '../../core/core.module';
import {appRoutes} from './lazyloader.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    CoreModule,
    MatSidenavModule,
    DashboardCrmModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule {
}
