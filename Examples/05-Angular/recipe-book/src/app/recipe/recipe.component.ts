import { Component } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe',
  standalone: true,
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
  imports: [RecipeListComponent, RecipeDetailComponent],
})
export class RecipeComponent {}
