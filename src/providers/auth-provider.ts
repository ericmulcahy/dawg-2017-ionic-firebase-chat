import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from "angularfire2/auth";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public angularFireAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
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
