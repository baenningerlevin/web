import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe?: Recipe;
  recipeId!: number;
  private subscription!: Subscription;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddToList() {
    this.shoppingListService.addIngredients(
      this.selectedRecipe?.ingredients || []
    );
  }

  onEdit() {
    this.router.navigate(['bearbeiten'], { relativeTo: this.activatedRoute });
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/rezepte']);
  }
}
