import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users : User[];

  constructor(private userService : UserService) { }

 

  getUsers(){
    this.userService.getUsers().subscribe(users => this.users =users)
    console.info("get user method")
  }

  ngOnInit() {
    this.getUsers()
  }
}
