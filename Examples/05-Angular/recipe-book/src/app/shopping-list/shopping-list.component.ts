import { Component } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add/shopping-list-add.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListAddComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {}
