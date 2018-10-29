import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {DashboardCrmComponent} from './dashboard-crm/dashboard-crm.component';

const adminRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'admin/dashboard', component: DashboardCrmComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)

  ],
  declarations: []
})
export class AdminRoutingModule {
}
