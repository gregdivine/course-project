import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
