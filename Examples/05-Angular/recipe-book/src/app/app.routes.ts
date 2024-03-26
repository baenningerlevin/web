import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { Error404Component } from './components/error/error404/error404.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { recipeRoutes } from './components/recipe/recipe.routes';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/rezepte', pathMatch: 'full' },
  { path: 'rezepte', component: RecipeComponent, children: recipeRoutes },
  { path: 'einkaufsliste', component: ShoppingListComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'error/404', component: Error404Component },
  { path: '**', redirectTo: '/rezepte' },
];
