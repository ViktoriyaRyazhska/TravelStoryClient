import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardCrmComponent} from './dashboard-crm/dashboard-crm.component';

const adminRoutes: Routes = [
  {path: 'admin', redirectTo: 'admin/dashboard'},
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
