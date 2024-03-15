import { Component } from '@angular/core';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

@Component({
    selector: 'app-recipe',
    standalone: true,
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.scss',
    imports: [RecipeListComponent]
})
export class RecipeComponent {

}
