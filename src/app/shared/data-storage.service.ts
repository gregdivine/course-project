import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes$(): Observable<Response> {
    return this.http.put(
      'https://ng-recipe-book-ae959.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    this.http
      .get('https://ng-recipe-book-ae959.firebaseio.com/recipes.json')
      .pipe(
        map((response: Response) => {
          const fetchedRecipes = response.json();
          for (const recipe of fetchedRecipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return fetchedRecipes;
        })
      )
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
