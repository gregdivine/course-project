import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyCNRMuFeRx6g2Pw0ef5TdRfXM1O82Queo8',
      authDomain: 'ng-recipe-book-ae959.firebaseapp.com'
    };
    firebase.initializeApp(config);
  }
}
