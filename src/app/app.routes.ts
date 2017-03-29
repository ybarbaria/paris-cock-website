import { TeamsComponent } from './teams/teams.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuType, RouteInfo } from './components/navbar/navbar.metadata';

import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { BlogpostComponent } from './blogpost/blogpost.component';
// import { BlogpostCreateComponent } from './blogpost/blogpost.create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teams', component: TeamsComponent},
    //   { path: 'login', component: LoginComponent },
    //   { path: ':path', component: BlogpostComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Paris Cocks', menuType: MenuType.BRAND },
  { path: 'teams', title: 'Teams', menuType: MenuType.LEFT },
  { path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];
