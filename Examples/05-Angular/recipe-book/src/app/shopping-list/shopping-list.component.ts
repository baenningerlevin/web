import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListAddComponent } from './shopping-list-add/shopping-list-add.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListAddComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];
}
