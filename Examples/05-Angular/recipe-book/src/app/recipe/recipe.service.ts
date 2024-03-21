import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Wiener Schnitzel',
      'In Österreich ein Klassiker, der fast nie auf einer Speisekarte fehlt. Gelingt jetzt auch zu Hause perfekt.',
      'https://www.bettybossi.ch/static/rezepte/x/bb_bkxx060101_0162a_x.jpg',
      [
        new Ingredient('Kalbsplätzli', '4'),
        new Ingredient('Salz', '1TL'),
        new Ingredient('Pfeffer', 'wenig'),
        new Ingredient('Mehl', '3EL'),
        new Ingredient('Paniermehl', '200g'),
        new Ingredient('Eier', '4'),
        new Ingredient('Öl', 'wenig'),
        new Ingredient('Bio-Zitrone', '1'),
      ]
    ),
    new Recipe(
      'Penne-Salat',
      'Penne-Salat - ein würziger Teigwarenschmaus, auch ideal für Partys',
      'https://www.bettybossi.ch/static/rezepte/x/bb_bbzf980715_0004b_x.jpg',
      [
        new Ingredient('Penne', '300g'),
        new Ingredient('Senf', '1EL'),
        new Ingredient('Aceto balsamico bianco', '3EL'),
        new Ingredient('Weissweinessig', '3EL'),
        new Ingredient('Olivenöl', '1dl'),
        new Ingredient('Pfefferminze', '2 zweiglein'),
        new Ingredient('Salz', '0.25TL'),
        new Ingredient('Mozzarella', '1 Beutel'),
        new Ingredient('Zucchini', '2'),
        new Ingredient('gelbe und rote Cherry-Tomaten', '200g'),
        new Ingredient('Rohschniken', '100g'),
      ]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes;
  }
}
