import { Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
export const appRoutes: Router = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];