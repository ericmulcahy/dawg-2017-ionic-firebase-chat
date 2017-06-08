import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {FirebaseListObservable} from "angularfire2/database";
import {UserProvider} from "../../providers/user-provider";
import {AuthProvider} from "../../providers/auth-provider";
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: FirebaseListObservable<any[]>;
  signedInUser: firebase.User;

  constructor(public navCtrl: NavController, private userProvider: UserProvider, private authProvider: AuthProvider) {
    authProvider.user.subscribe((data) => {
      this.signedInUser = data;
    });
    this.users = userProvider.getAllUsers();
  }

  startChat(user: any) {
    console.log('starting chat with ' + user.email);
  }

}
