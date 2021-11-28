import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { NewsViewComponent } from './pages/news-view/news-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: NewsViewComponent },
  { path: 'maintenance', component: MaintenanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
