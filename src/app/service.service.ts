import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {
    this.getAllUsers();
  }

  private initialUser: User[] = [
    {
      id: 0,
      name: 'vicky',
      email: 'vick@gmail.com',
      password: 'vick123',
    },
  ];
  private allUsers = new BehaviorSubject<User[]>(this.initialUser);
  alluserData$ = this.allUsers.asObservable();

  private apiUrl = 'http://localhost:3000/user'; //http://localhost:3000/user

  getAllUsers() {
    this.http.get<User[]>(this.apiUrl).subscribe((data) => {
      this.allUsers.next(data);
    });
  }

  addUser(user: User) {
    const newUserUpdate = [...this.allUsers.value, user];

    this.http.post<User>(this.apiUrl, user).subscribe((data) => {
      this.allUsers.next(newUserUpdate);
      this.getAllUsers();
    });
  }
}
