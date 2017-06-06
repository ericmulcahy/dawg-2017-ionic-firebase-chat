import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {validateEmail} from "../validators/email";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, validateEmail]),
      password: new FormControl("", Validators.required)
    });
  }


  signIn() {

  }

  createAccount() {
    let credentials = this.loginForm.value;

  }
}
