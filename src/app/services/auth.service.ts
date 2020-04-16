import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  constructor(
    private af: AngularFirestore,
    private afa: AngularFireAuth,
    private router: Router
  ) {
    this.afa.authState.subscribe(user => {
      if (user) {
        this.user = user.providerData[0];
        this.af.collection('users').doc(this.user.uid).set({
          user: this.user
        });
      }
    });
  }

  async loginWithGoogle() {
    await this.afa.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['set-up']);
  }

  async logout(){
    await this.afa.signOut();
    this.router.navigate(['log-in']);
  }
}
