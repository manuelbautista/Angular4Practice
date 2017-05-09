import { Component } from '@angular/core';
import {ShoppingListService} from "./shopping-list/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
 loadedFeature = 'recipe';

  onNavigate(featureSelected: string){
    this.loadedFeature = featureSelected;
  }
}


