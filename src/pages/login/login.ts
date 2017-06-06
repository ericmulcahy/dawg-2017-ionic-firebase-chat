import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {validateEmail} from "../validators/email";
import {AuthProvider} from "../../providers/auth-provider";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, validateEmail]),
      password: new FormControl("", Validators.required)
    });
  }


  signIn() {
    this.authProvider.signIn(this.loginForm.value).then(loginResult => {
      console.log('successfully signed in. loginResult: ' + loginResult);
      this.navigateToMainPage();
    }, error => {
      console.log('error signing in: ' + error);
    })
  }

  createAccount() {
    let credentials = this.loginForm.value;
    this.authProvider.createAccount(credentials).then(user => {
      console.log('successfully created account! user: ' + user);
      this.navigateToMainPage();
    }, error => {
      console.log('error creating account! error: ' + error);
    });
  }


  navigateToMainPage() {
    this.navCtrl.push(TabsPage);
  }
}
