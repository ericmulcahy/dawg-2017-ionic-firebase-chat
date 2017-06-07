import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {UsersPage} from '../pages/users/users';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {AngularFireModule} from "angularfire2";
import {AuthProvider} from "../providers/auth-provider";
import {AngularFireAuthModule} from "angularfire2/auth";
import {IonicStorageModule} from "@ionic/storage";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {UserProvider} from "../providers/user-provider";
import {AccountPage} from "../pages/account/account";
import {ChatPage} from "../pages/chat/chat";

export const firebaseConfig = {
  apiKey: "AIzaSyADq7Yy283TsNxxs8x-hXfD1k3lyeJQDZI",
  authDomain: "dawg-chat.firebaseapp.com",
  databaseURL: "https://dawg-chat.firebaseio.com",
  projectId: "dawg-chat",
  storageBucket: "dawg-chat.appspot.com",
  messagingSenderId: "959884748484"
};

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    UsersPage,
    TabsPage,
    LoginPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    AccountPage,
    UsersPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider
  ]
})
export class AppModule {}
