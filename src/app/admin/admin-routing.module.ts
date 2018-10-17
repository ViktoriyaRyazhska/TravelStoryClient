import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MessengerComponent} from "../messenger/messenger.component";
import {TestWebSocketsComponent} from "../messenger/test-web-sockets/test-web-sockets.component";
import {AdminComponent} from "./admin.component";
import {TableComponent} from "./table/table.component";
import {ChartsComponent} from "./charts/charts.component";

const adminRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'admin/table', component: TableComponent},
  {path: 'admin/chart', component: ChartsComponent}
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