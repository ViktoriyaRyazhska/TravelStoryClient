import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

const securityModule: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(securityModule)
  ],
  declarations: []
})
export class SecurityRoutingModule {
}
