import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  private recipies: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  getRecipes() {
    return this.recipies.slice();
  }

  getRecipe(index: number) {
    return this.recipies[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipies.push(recipe);
    this.recipeChanged.next(this.recipies.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipies[index] = recipe;
    this.recipeChanged.next(this.recipies.slice());
  }

  deleteRecipe(index: number) {
    this.recipies.splice(index, 1);
    this.recipeChanged.next(this.recipies.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipies = recipes;
    this.recipeChanged.next(this.recipies.slice());
  }
}
