import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// HTTP
import { HttpClientModule } from '@angular/common/http';

// Angular Markdown
import { MarkdownModule } from 'ngx-markdown';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
// END of MDB Modules

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutNitrComponent } from './components/about-nitr/about-nitr.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { FooterCopyrightComponent } from './components/footer-copyright/footer-copyright.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { RelatedNewsComponent } from './components/related-news/related-news.component';
import { NewsViewComponent } from './pages/news-view/news-view.component';
import { PostComponent } from './components/post/post.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';

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
    LatestNewsComponent,
    UpcomingEventsComponent,
    FooterCopyrightComponent,
    NewsContentComponent,
    RelatedNewsComponent,
    NewsViewComponent,
    PostComponent,
    NewsListComponent,
    AboutComponent,
    EventsComponent,
    EventListComponent,
    DepartmentListComponent,
  ],
  imports: [
    // Markdown
    MarkdownModule.forRoot({}),
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,

    // MBD Modules
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
