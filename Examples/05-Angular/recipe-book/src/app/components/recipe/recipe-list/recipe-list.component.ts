import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
  imports: [RecipeItemComponent, CommonModule],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  private recipeDeletedSubscription!: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });

    this.recipeDeletedSubscription = this.recipeService.recipeDeleted.subscribe(
      () => {
        this.recipeService.getRecipes().subscribe((recipes) => {
          this.recipes = recipes;
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.recipeDeletedSubscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['neu'], { relativeTo: this.activatedRoute });
  }
}
