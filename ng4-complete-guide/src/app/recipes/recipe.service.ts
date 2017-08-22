import {Injectable} from "@angular/core";
import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();


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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  //get the recipe array list
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);

  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
