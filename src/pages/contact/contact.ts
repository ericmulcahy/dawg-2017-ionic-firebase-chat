import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth-provider";
import {LoginPage} from "../login/login";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController, private authProvider: AuthProvider) {
    this.user = authProvider.user;
    console.log('contact page user set to ' + this.user);
  }

  signOut() {
    this.authProvider.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

}
