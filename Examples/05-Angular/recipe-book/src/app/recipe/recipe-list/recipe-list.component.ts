import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
  imports: [RecipeItemComponent],
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe(
    'Dummy',
    'Dummy text, super cool recipe!',
    'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/1200/675/Crash-test-dummy-yellow-getty-10-22.jpg?ve=1&tl=1'
  );

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
