import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import { Storage } from '@ionic/storage';

// todo: what does this comment mean? (from angularfire2 docs https://github.com/angular/angularfire2/blob/master/docs/version-4-upgrade.md)
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from "angularfire2/database";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase, private storage: Storage) {
    this.user = angularFireAuth.authState;

    this.user.subscribe(data => {
      console.log('user data changed: ' + JSON.stringify(data));
    });
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

  signIn(credentials): firebase.Promise < any > {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(data => {
        this.storage.set('uid', data.uid);
      });
  }

  createAccount(credentials) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(data => {
        this.storage.set('uid', data.uid);
        this.createUserRecord(credentials.email, data.uid);
      });
  }

  createUserRecord(email: string, uid: any) {
    let currentUserRef = this.angularFireDatabase.database.ref(`/users/${uid}`);
    currentUserRef.set({email: email});
    console.log(currentUserRef);
  }

  signOut() {
    this.angularFireAuth.auth.signOut();
  }
}
