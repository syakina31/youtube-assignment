import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './searchresult/searchresult.component';
import { YoutubeService } from './youtubeservice.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchplaceComponent } from './searchplace/searchplace.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SearchplaceComponent,
    SearchResultComponent,
    NavbarComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
