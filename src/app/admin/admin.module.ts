import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import {AdminComponent} from './admin.component';
import {TranslateModule} from '@ngx-translate/core';
import {AuthComponent} from './auth/auth.component';
import {RouterOutlet} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [AdminComponent, AuthComponent]
})
export class AdminModule { }
