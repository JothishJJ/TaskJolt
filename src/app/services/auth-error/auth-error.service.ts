import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthErrorService {
  private auth: Auth = inject(Auth);

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  async isLoggedIn() {
    return new Promise<boolean>((resolve) => {
      authState(this.auth).subscribe((user) => {
        let userL: boolean;

        if (user) {
          userL = !!user;
        } else {
          userL = false;
        }

        resolve(userL);
      });
    }).then((user) => {
      if (!user) {
        this.snackBar
          .open('You have to be logged in!', 'Login', {
            duration: 4000,
          })
          .onAction()
          .pipe(tap(() => this.router.navigate(['login'])))
          .subscribe();
      }

      return user;
    });
  }

  async isVerified() {
    return new Promise<boolean>((resolve) => {
      authState(this.auth).subscribe((user) => {
        let emailVerified: boolean;

        if (user) {
          emailVerified = user.emailVerified;
        } else {
          emailVerified = false;
        }

        resolve(emailVerified);
      });
    }).then((emailVerified) => {
      if (!emailVerified) {
        this.snackBar
          .open('Verify your email!', 'Verify', {
            duration: 4000,
          })
          .onAction()
          .pipe(tap(() => this.router.navigate(['login', 'verify'])))
          .subscribe();
      }

      return emailVerified;
    });
  }
}
