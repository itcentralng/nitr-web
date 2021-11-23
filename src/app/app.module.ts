import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutNitrComponent } from './about-nitr/about-nitr.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent,
    HomeComponent,
    NewsComponent,
    DepartmentsComponent,
    TopNavbarComponent,
    CarouselComponent,
    AboutNitrComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
