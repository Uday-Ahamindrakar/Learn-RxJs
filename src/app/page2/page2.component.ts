import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';

@Component({
  selector: 'app-page2',
  standalone: false,
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css',
})
export class Page2Component implements OnInit {
  constructor(private service: ServiceService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.service.alluserData$.subscribe((data) => {
      this.users = data;
    });
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
      this.newUser.name = '';
      this.newUser.email = '';
    }
  }
}
