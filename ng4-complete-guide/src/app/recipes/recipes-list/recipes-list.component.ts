import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A Test Recipe','This is simoply a test','http://www.rd.com/wp-content/uploads/sites/2/2005/10/hamburger-noodle-casserole.jpg'),
    new Recipe('A Test Recipe','This is simoply a test','http://images.diabeticlivingonline.mdpcdn.com/sites/diabeticlivingonline.com/files/styles/facebook_og_image/public/R117329.jpg?itok=Oopic6he')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRececipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
