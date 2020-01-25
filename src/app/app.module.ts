import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './_tamplates/heroes/heroes.component';
import { HeroDetailComponent } from './_tamplates/hero-detail/hero-detail.component';
import { MessagesComponent } from './_tamplates/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './_tamplates/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
