import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {IndexModule} from "./pages/index/index.module";
import {ComponentsModule} from "./shared/components/components.module";
import {routes} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(
      routes
    ),
    IndexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
