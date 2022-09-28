import { Component, OnInit } from '@angular/core';

import { MoviesService } from 'src/services/movies.service';
import { Movie } from '../../../../models/movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  lstMovies: Movie[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.moviesService.getAll().then(response => { this.lstMovies = response });
  }

}
