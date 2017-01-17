import { Routes } from "@angular/router";

import { HomeComponent } from "../pages/home";
import { AboutComponent } from "../pages/about";

export const rootRouterConfig = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent }
];
