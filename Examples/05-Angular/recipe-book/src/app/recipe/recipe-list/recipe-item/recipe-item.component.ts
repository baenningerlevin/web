import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
