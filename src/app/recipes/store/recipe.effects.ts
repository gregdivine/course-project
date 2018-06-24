import { Effect, Actions } from '@ngrx/effects';
import * as RecipeActions from '../store/recipe.actions';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';

export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$.ofType(RecipeActions.FETCH_RECIPES).pipe(
    switchMap((action: RecipeActions.FetchRecipes) => {
      this.httpClient.get<Recipe[]>(
        'https://ng-recipe-book-ae959.firebaseio.com/recipes.json'
      );
    }),
    map(recipes => {
      for (const recipe of recipes) {
        if (!recipe.ingredients) {
          recipe.ingredients = [];
        }
      }
      return {
        type: RecipeActions.SET_RECIPES,
        payload: recipes
      };
    })
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
