import { Injectable } from '@angular/core';

import {  HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url : string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.Url);
  }
}

