import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'this is a test', 'https://placeimg.com/640/480/any'),
        new Recipe('Another test recipe', 'this is another test', 'https://placeimg.com/200/480/any')
      ];
    
      getRecipes() {
          return this.recipes.slice();
      }
}