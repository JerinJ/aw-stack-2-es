import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { rootRouterConfig } from "./router/app.routes";

import { HeaderComponent } from "./components/header";

import { LayoutComponent } from "./pages/layout";
import { HomeComponent } from "./pages/home";
import { AboutComponent } from "./pages/about";

import "../styles/override.less";
import "../styles/common.less";

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    NgbModule.forRoot()
  ],
  bootstrap: [LayoutComponent],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }]
})

export class AppModule { }
