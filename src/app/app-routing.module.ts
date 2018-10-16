import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: 'feed', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
