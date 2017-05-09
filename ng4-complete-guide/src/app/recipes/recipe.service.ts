import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] =[
    new Recipe('A Test Recipe','This is simoply a test','http://www.rd.com/wp-content/uploads/sites/2/2005/10/hamburger-noodle-casserole.jpg'
      ,[new Ingredient('Meat', 1),
        new Ingredient('French Fries', 10)
      ]),
    new Recipe('A Test Recipe','This is simoply a test','http://images.diabeticlivingonline.mdpcdn.com/sites/diabeticlivingonline.com/files/styles/facebook_og_image/public/R117329.jpg?itok=Oopic6he'
      ,[new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),

  ];
  constructor(private slService: ShoppingListService){

  }
  //get the recipe array list
  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);

  }
}
