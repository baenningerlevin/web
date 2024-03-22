import { Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { recipeRoutes } from './recipe/recipe.routes';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/rezepte', pathMatch: 'full' },
  { path: 'rezepte', component: RecipeComponent, children: recipeRoutes },
  { path: 'einkaufsliste', component: ShoppingListComponent },
  { path: '**', redirectTo: '/rezepte' },
];
