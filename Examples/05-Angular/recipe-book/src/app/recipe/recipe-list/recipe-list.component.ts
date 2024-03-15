import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
  imports: [RecipeItemComponent],
})
export class RecipeListComponent {
  recipe = new Recipe(
    'Dummy',
    'Dummy',
    'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/1200/675/Crash-test-dummy-yellow-getty-10-22.jpg?ve=1&tl=1'
  );
}
