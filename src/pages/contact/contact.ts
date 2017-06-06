import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth-provider";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user: any;
  constructor(public navCtrl: NavController, private authProvider: AuthProvider) {
    authProvider.user.subscribe((data) => {
      this.user = data;
    });
    console.log('contact page user set to ', this.user);
  }

  signOut() {
    this.authProvider.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

}
