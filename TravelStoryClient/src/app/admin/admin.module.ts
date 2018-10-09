import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AdminComponent} from './admin.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
  ],
  declarations: [AdminComponent, ChartsComponent, TableComponent, HeaderComponent, SidebarComponent]
})
export class AdminModule { }
