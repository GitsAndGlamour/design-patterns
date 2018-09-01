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
  themes: string[];
  bootswatch: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.login = {url: 'login', buttonText: 'Login'};
    this.register = {url: 'register', buttonText: 'Signup'};
    this.auth = this.register;
    this.themes = ['default', 'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly',
      'journal', 'litera', 'lumen', 'lux', 'materia', 'minty', 'pulse',
      'sandstone', 'simplex', 'sketchy', 'slate', 'solar', 'spacelab',
      'superhero', 'united', 'yeti'];
    this.bootswatch = document.getElementById('bootswatch');
  }
/*  TODO: Toggle Auth for Login/Register toggleAuth() {
    this.auth = this.auth === this.register ? this.login : this.register;
  }*/
  selectTheme(theme: string) {
    if (theme === 'default') {
      this.bootswatch.setAttribute('href', 'https://bootswatch.com/_vendor/bootstrap/dist/css/bootstrap.min.css');
    } else {
      this.bootswatch.setAttribute('href', 'https://bootswatch.com/4/' + theme + '/bootstrap.min.css');
    }
  }

}
