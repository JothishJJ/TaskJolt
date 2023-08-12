import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  state: 'signup' | 'login' = 'signup';

  setState(state: 'signup' | 'login') {
    this.state = state;
  }

  get isLogin() {
    return this.state === 'login';
  }

  get isSignup() {
    return this.state === 'signup';
  }
}
