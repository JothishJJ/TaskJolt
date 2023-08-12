import { Component, inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  auth: Auth = inject(Auth);

  authState$ = authState(this.auth);

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
