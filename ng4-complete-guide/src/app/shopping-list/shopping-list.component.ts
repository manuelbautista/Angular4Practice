import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import { ShoppingListService } from './shopping-list.service';
import {Subscription} from "rxjs/Subscription";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index)
  }
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
        //alert('Subscribe');
      }
    );
  }

}
