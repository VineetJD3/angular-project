import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { Routes, RouterModule } from "@angular/router";
import { AppRoute } from "./app.route";
import { FilterPipe } from './filter.pipe'
import { HttpModule, RequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
