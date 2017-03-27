import { TeamsComponent } from './teams/teams.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { BlogpostComponent } from './blogpost/blogpost.component';
// import { BlogpostCreateComponent } from './blogpost/blogpost.create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: ':path', component: BlogpostComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);