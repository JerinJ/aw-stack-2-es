// Angular 2
import "@angular/common";
import "@angular/compiler";
import "@angular/core";
import "@angular/forms";
import "@angular/http";
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";
import "@angular/router";

// RxJS
import "reflect-metadata";
import "rxjs";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

import { AppModule } from "./app/app.module";

if (process.env.ENV === "production") {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
