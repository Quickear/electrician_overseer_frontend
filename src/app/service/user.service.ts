import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL: string;
  constructor(private http: HttpClient) {
    this.userURL = 'http://localhost:8080/users'
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userURL);
  }

  public save(user: User) {
    return this.http.post<User>(this.userURL, user);
  }

  public update(user: User) {
    return this.http.put<User>(this.userURL, user);
  }}
