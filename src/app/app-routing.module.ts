import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Dashboard
 */
import { DashboardComponent } from './pages/dashboard/dashboard.component';

/**
 * Movies
 */
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { MoviesDetailComponent } from './pages/movies/movies-detail/movies-detail.component';

/**
 * Users
 */
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersDetailComponent } from './pages/users/users-detail/users-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies-list', component: MoviesListComponent },
  { path: 'movies-detail', component: MoviesDetailComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'users-detail', component: UsersDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
