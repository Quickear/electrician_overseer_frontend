import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.findAll()
      .subscribe( data => {
        this.users = data;

      });
  };

}
