import { Component, OnInit } from '@angular/core';
import { movie, movieAgeGroup, movieType } from '../../../../models/movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  lstMovies: movie[] = [
    {
      id: 1,
      name: 'Orphan: First Kill 1',
      type: movieType.Horror,
      ageRating: movieAgeGroup.R,
      realeseDate: new Date(2022, 9, 15),
      rating: 4,
      editor: 'Josh Ethier',
      director: 'William Brent Bell',
      distributedBy: 'Paramount Players',
      executiveProducers: 'David Leslie Johnson-McGoldrick',
      description: 'After escaping from a psychiatric facility in Estonia, Esther travels to America by impersonating the missing daughter of a wealthy family. Yet, an unexpected twist arises that pits her against a mother who will protect her family at any cost.'
    },
    {
      id: 2,
      name: 'How High',
      type: movieType.Action,
      ageRating: movieAgeGroup.R,
      realeseDate: new Date(2001, 12, 21),
      rating: 3,
      editor: 'Larry Bock',
      director: 'Jesse Dylan',
      distributedBy: 'Universal Pictures',
      executiveProducers: 'Danny DeVito, Shauna Garr, Michael Shamberg, James Ellis, Stacey Sher, Pamela Abdy',
      description: 'Multi-platinum rap superstars Redman and Method Man star as Jamal and Silas, two regular guys who smoke something magical, ace their college entrance exams and wind up at Harvard. Ivy League ways are strange but Silas and Jamal take it in a stride -- until their supply of supernatural smoke runs dry. Thats when they have to start living by their wits and rely on their natural resources to make the grade.'
    },
    {
      id: 3,
      name: 'The Fast and the Furious',
      type: movieType.Action,
      ageRating: movieAgeGroup.PG13,
      realeseDate: new Date(2001, 9, 28),
      rating: 4,
      editor: 'Peter Honess',
      director: 'Rob Cohen',
      distributedBy: 'Universal Pictures',
      executiveProducers: 'Neal H. Moritz',
      description: 'A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner. FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter.'
    },
  ];

  ngOnInit(): void {

  }

}
