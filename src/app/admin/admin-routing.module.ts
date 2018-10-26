import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AdminComponent} from './admin.component';

const adminRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {
    // {path: 'admin/chart', component: ChartsComponent}
    path: '',
    component: AuthComponent,
    children: [
      {path: 'auth1', component: AuthComponent},
      // {path: 'settings', component: SettingsPageComponent},
      // {path: 'user/:id', component: UserPageComponent},
      // {path: 'login', component: LoginComponent},
    ]
  }
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
