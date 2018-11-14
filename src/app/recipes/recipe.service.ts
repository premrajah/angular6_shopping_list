import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
      
    new Recipe(
      "Chicken jalfrezi",
      "This curry is also healthy with two of your 5-a-day and a dose of vitamin C",
      "https://goo.gl/4VGg8R",
      [
          new Ingredient("Onions (1/2)", 1),
          new Ingredient("Garlic Cloves", 2)
      ]
    ),
    new Recipe(
      "Barley, chicken & mushroom risotto",
      "Love risotto? Try this low-fat version, which swaps traditional risotto rice for pearl barley",
      "https://goo.gl/96dCdP",
      [
          new Ingredient("Butter (tbsp)", 1),
          new Ingredient("Shallots (L)", 2)
      ]
    )
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

 
}
