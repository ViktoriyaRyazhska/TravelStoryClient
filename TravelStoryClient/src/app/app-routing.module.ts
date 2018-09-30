import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";


const routes: Routes = [
  {path: '', component: UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
