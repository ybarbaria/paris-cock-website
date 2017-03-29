import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YoutubeService } from './services/youtube.service';
import { TeamsComponent } from './teams/teams.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {
  routing,
  appRoutingProviders
} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MnFullpageDirective,
    HomeComponent, 
    TeamsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgbModule
  ],
  providers: [
    appRoutingProviders,
    MnFullpageService,
    YoutubeService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
