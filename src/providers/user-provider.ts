import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";
import {AuthProvider} from "./auth-provider";
import {Camera} from "@ionic-native/camera";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {

  constructor(private angularFireDatabase: AngularFireDatabase, private authProvider: AuthProvider, private camera: Camera) {
  }

  getAllUsers() {
    return this.angularFireDatabase.list('/users');
  }

  changePicture() {
    console.log('changing picture');
    this.authProvider.getUserId().then(uid => {
      let pictureRef = this.angularFireDatabase.database.ref(`/users/${uid}/picture`);
      this.getPicture().then(picture => {
        pictureRef.set(picture);
      });
    });
  }

  getPicture() {
    return new Promise((resolve, reject) => {
      // let options = {
      //   quality: 100,
      //   sourceType: this.camera.PictureSourceType.CAMERA,
      //   correctOrientation: true,
      //   destinationType: this.camera.DestinationType.DATA_URL,
      // };
      this.camera.getPicture().then((imageData) => {
        let base64Picture = "data:image/jpeg;base64," + imageData;
        resolve(base64Picture);
      }, (error) => {
        reject(error);
      });
    });
  }

}
