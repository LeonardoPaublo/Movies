import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { MoviesDetailComponent } from './pages/movies/movies-detail/movies-detail.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersDetailComponent } from './pages/users/users-detail/users-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    UsersListComponent,
    UsersDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
