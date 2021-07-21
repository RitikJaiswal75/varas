import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavsComponent } from './customComponents/navs/navs.component';
import { AboutComponent } from './customComponents/about/about.component';
import { HomeComponent } from './customComponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
