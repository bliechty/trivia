import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { Subject } from 'rxjs';

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
        let displayName = this.user.displayName;
        const email = this.user.email;

        if (displayName) {
          displayName = displayName.replace(/\s.+/, '');
        } else {
          displayName = email.replace(/@.+/, '');
        }

        this.loggedInChange.next(true);
        this.firstNameChange.next(displayName);

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

  async logout() {
    this.loggedInChange.next(false);
    await this.afa.signOut();
    this.router.navigate(['log-in']);
  }

  signup(email: string, password: string) {
    console.log(email, password);
    this.afa.createUserWithEmailAndPassword(email, password)
      .then(_ => {
        console.log('Successfully created an account');
      })
      .catch(e => {
        console.log('Error with signing up:');
        console.log(e);
      });
  }

  signin(email: string, password: string) {
    this.afa.signInWithEmailAndPassword(email, password)
      .then(_ => {
        console.log("Successfully signed in using email and password");
      })
      .catch(e => {
        console.log('Error with signing in with email and password');
        console.log(e);
      });
  }
}
