import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  loggedInChange: Subject<boolean> = new Subject<boolean>();
  firstNameChange: Subject<string> = new Subject<string>();

  constructor(
    private af: AngularFirestore,
    private afa: AngularFireAuth,
    private router: Router
  ) {
    this.afa.authState.subscribe(user => {
      if (user) {
        this.user = user.providerData[0];

        this.loggedInChange.next(true);
        this.firstNameChange.next(this.user.displayName.replace(/\s.+/, ''));

        const usersRef = this.af.collection('users').doc(this.user.uid);

        usersRef.update({...this.user}).catch(_ => {
          usersRef.set({...this.user});
        });
      }
    });
  }

  async loginWithGoogle() {
    await this.afa.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['set-up']);
  }

  async loginWithFacebook() {
    await this.afa.signInWithPopup(new auth.FacebookAuthProvider());
    this.router.navigate(['set-up']);
  }

  async logout(){
    this.loggedInChange.next(false);
    await this.afa.signOut();
    this.router.navigate(['log-in']);
  }

  getAllUsersObservable(): Observable<Array<User>> {
    return this.af.collection<User>('users').valueChanges();
  }
}
