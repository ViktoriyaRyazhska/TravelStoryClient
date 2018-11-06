import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MapsRouterModule} from './maps.router';
import {AgmCoreModule} from '@agm/core';
import * as hljs from 'highlight.js';
import {HIGHLIGHT_JS, HighlightJsModule} from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import {GoogleMapComponent} from './google-map/google-map.component';

export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs'
    }),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
    MapsRouterModule
  ],
  declarations: [
    GoogleMapComponent],

  exports: []
})
export class MapsModule {
}
