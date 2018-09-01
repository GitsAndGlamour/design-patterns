import { Component, OnInit } from '@angular/core';

class AuthButton {
  url: string;
  buttonText: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  login: AuthButton;
  register: AuthButton;
  auth: AuthButton;
  constructor() { }

  ngOnInit() {
    this.login = {url: 'login', buttonText: 'Login'};
    this.register = {url: 'register', buttonText: 'Signup'};
    this.auth = this.register;
  }
  toggleAuth() {
    this.auth = this.auth === this.register ? this.login : this.register;
  }

}
