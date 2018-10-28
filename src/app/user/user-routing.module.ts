import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from './user-page/user-page.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {LoginComponent} from '../security/login/login.component';
import {UserComponent} from './user.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'settings', component: SettingsPageComponent},
      {path: 'user/:id', component: UserPageComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),

  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule {
}
