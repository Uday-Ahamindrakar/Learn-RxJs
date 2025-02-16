import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { User } from './user';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.service.alluserData$.subscribe((data) => {
      this.users = data;
    });
    // this.service.getAllUsers().subscribe((data: User[]) => {
    //   this.users = data;
    //   console.log(data);
    // });
  }

  newUser = {
    name: '',
    email: '',
    // password: '',
  };

  addNewUser() {
    console.log('add user button clicked');
    if (this.newUser.name != '' && this.newUser.email != '') {
      this.service.addUser(this.newUser);
      this.service.alluserData$.subscribe((data) => {
        this.users = data;
      });
      // .subscribe((postResponse) => {
      //   console.log(
      //     'User addes succesffully',
      //     JSON.stringify(postResponse, null, 2)
      //   );
      // this.service.getAllUsers().subscribe((data) => {
      //   this.users = data;
      // });
    }

    this.newUser.name = '';
    this.newUser.email = '';
  }
}
