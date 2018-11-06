import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';

const pagesRoutes: Routes = [
  {path: 'contact', component: ContactComponent, data: {animation: 'contact'}},
  {path: 'about', component: AboutComponent, data: {animation: 'about'}}
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRouterModule {
}
