import { Directive, HostListener, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { User } from '../user.model';

@Directive({
  selector: '[appGoogleSignin]',
})
export class GoogleSigninDirective {
  private auth: Auth = inject(Auth);
  private db: Firestore = inject(Firestore);

  constructor() {}

  @HostListener('click')
  onClick() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider).then((result) => {
      const user = result.user;
      const userDoc = doc(this.db, `users/${user.uid}`);
      // Creates a doc for the current if not present
      setDoc(
        userDoc,
        <User>{
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        },
        { merge: true }
      );
    });
  }
}
