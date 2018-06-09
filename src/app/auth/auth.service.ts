import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(info => {
        console.log(info);
      })
      .catch(err => {
        console.log(err);
      });
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          });
      })
      .catch(error => {
        console.log('Error', error);
      });
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  isAuthenticated(): boolean {
      return this.token != null;
  }
  logout() {
      firebase.auth().signOut();
      this.token = null;
  }
}
