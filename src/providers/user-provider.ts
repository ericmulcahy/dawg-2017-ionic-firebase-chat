import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AuthProvider} from "./auth-provider";
import {Camera, CameraOptions} from "@ionic-native/camera";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  userList: FirebaseListObservable<any[]>;

  constructor(private angularFireDatabase: AngularFireDatabase, private authProvider: AuthProvider, private camera: Camera) {
  }

  getAllUsers() {
    this.userList = this.angularFireDatabase.list('/users');

    this.angularFireDatabase.list('/users').subscribe();

    return this.userList;
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
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
      this.camera.getPicture(options).then((imageData) => {
        let base64Picture = "data:image/jpeg;base64," + imageData;
        resolve(base64Picture);
      }, (error) => {
        reject(error);
      });
    });
  }

}
