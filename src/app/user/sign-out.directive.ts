import { Directive, HostListener, inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Directive({
  selector: '[appSignOut]'
})
export class SignOutDirective {

  private auth: Auth = inject(Auth);

  @HostListener('click')
  onClick() {
    signOut(this.auth)
  }
}
