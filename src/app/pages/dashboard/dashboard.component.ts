import { Component, OnInit } from '@angular/core';

/**
 * Movies
 */
import { MoviesService } from 'src/services/movies.service';
import { Movie } from '../../../models/movies.model';

/**
 * Users
 */
import { UsersService } from 'src/services/users.service';
import { User } from '../../../models/users.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private moviesService: MoviesService, private usersService: UsersService) { }

  lstMovies: Movie[] = [];

  lstUser: User[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.moviesService.getBestMovies().then(moviesResponse => {
      this.lstMovies = moviesResponse;

      this.usersService.getBestUsers().then(usersResponse => { this.lstUser = usersResponse });
    });
  }

}
