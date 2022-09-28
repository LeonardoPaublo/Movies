import { Injectable } from '@angular/core';
import { User } from 'src/models/users.model';

const data: User[] = [
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

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  /**
   * Get All
   * @returns All Users
   */
  async getAll() {
    return await data;
  }

  /**
   * Get Best Users
   * @returns The Best Users
   */
  async getBestUsers() {
    return await data;
  }
}
