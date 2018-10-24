import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureTableComponent } from './feature-table/feature-table.component';

const materialWidgetRoutes: Routes = [
  // { path: 'fixed', component: FixedTableComponent , data: { animation: 'fixed' }},
  {path: 'featured', component: FeatureTableComponent , data: { animation: 'featured' }},
  // { path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}
