import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";

// todo: what does this comment mean? (from angularfire2 docs https://github.com/angular/angularfire2/blob/master/docs/version-4-upgrade.md)
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>;

  constructor(public angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  isAlreadyLoggedIn() {
    return new Promise(resolve => {
      this.angularFireAuth.authState.subscribe(user => {
        if (user) {
          console.log("user is already logged in!");
          resolve(true);
        } else {
          console.log("user is not already logged in!");
          resolve(false);
        }
      });
    });
  }

  signIn(credentials) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  createAccount(credentials) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logOut() {
    this.angularFireAuth.auth.signOut();
  }
}
