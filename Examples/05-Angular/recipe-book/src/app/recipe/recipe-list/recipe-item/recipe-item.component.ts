import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() recipeId!: number;
}
