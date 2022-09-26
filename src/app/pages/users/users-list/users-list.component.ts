import { Component, OnInit } from '@angular/core';
import { user } from '../../../../models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  lstUser: user[] = [
    {
      id: 1,
      name: 'Leonardo Paublo de Oliveira',
      password: '123456',
      birthdate: new Date(2003, 3, 28),
      email: 'leonardopaublo@gmail.com',
      access: 100
    },
    {
      id: 2,
      name: 'Lucas Jesus',
      password: '123456',
      birthdate: new Date(2003, 3, 28),
      email: 'lucassj.dev@gmail.com',
      access: 50
    },
    {
      id: 3,
      name: 'Richard',
      password: '123456',
      birthdate: new Date(2003, 3, 28),
      email: 'leonardopaublo@gmail.com',
      access: 25
    },
  ];

  ngOnInit(): void {
  }

}
