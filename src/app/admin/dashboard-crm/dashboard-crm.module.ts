import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardCrmComponent} from './dashboard-crm.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {DashboardWidgetModule} from '../dashboard-widget/dashboard-widget.module';
import {LineGraphComponent} from '../dashboard-widget/line-graph/line-graph.component';

export const appRoutes: Routes = [
  {path: 'admin/dashboard', component: DashboardCrmComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    DashboardWidgetModule
  ],
  declarations: [DashboardCrmComponent, LineGraphComponent],
  exports: []
})
export class DashboardCrmModule {
}
