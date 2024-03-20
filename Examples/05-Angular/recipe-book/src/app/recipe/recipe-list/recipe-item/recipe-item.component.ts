import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelect() {
    this.recipeSelected.emit(this.recipe);
  }
}
