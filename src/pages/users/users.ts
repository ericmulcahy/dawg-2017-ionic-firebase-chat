import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {FirebaseListObservable} from "angularfire2/database";
import {UserProvider} from "../../providers/user-provider";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private userProvider: UserProvider) {
    this.users = userProvider.getAllUsers();
  }

}
