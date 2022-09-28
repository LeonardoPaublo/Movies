import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { User } from '../../../../models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  lstUser: User[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.usersService.getAll().then(response => { this.lstUser = response });
  }

}
