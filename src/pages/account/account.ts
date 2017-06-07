import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth-provider";
import {LoginPage} from "../login/login";
import {UserProvider} from "../../providers/user-provider";

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  user: any;

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private userProvider: UserProvider) {
    authProvider.user.subscribe((data) => {
      this.user = data;
    });
    console.log('account page user set to ', this.user);
  }

  signOut() {
    this.authProvider.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  changePicture() {
    this.userProvider.changePicture();
  }

}
