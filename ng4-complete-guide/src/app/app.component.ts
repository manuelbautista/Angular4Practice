import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent implements OnInit {
 loadedFeature = 'recipe';

 ngOnInit() {
  firebase.initializeApp({
    apiKey: "AIzaSyBhxGlneBgpZT4h_dff4Ee7Haw8JKQwt4Y",
    authDomain: "ng-recipe-book-c8e04.firebaseapp.com"
  });
 }
  onNavigate(featureSelected: string){
    this.loadedFeature = featureSelected;
  }
}


