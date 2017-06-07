import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {

  constructor(private angularFireDatabase: AngularFireDatabase) {
  }

  getAllUsers() {
    return this.angularFireDatabase.list('/users');
  }

}
