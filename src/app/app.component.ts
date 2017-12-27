import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      firebase.initializeApp({
        apiKey: "AIzaSyDOPIwW7witK_QlnhbtOjx2POPxqSQeT6w",
        authDomain: "com-qbits-ionic-firebaseauth.firebaseapp.com",
        databaseURL: "https://com-qbits-ionic-firebaseauth.firebaseio.com",
        projectId: "com-qbits-ionic-firebaseauth",
        storageBucket: "com-qbits-ionic-firebaseauth.appspot.com",
        messagingSenderId: "909075048992"
      });

      const unsubscribe = firebase.auth().onAuthStateChanged( user => {
        if (!user) {
          this.rootPage = 'LoginPage';
          unsubscribe();
        } else { 
          this.rootPage = HomePage;
          unsubscribe();
        }
      });

    });
  }
}

