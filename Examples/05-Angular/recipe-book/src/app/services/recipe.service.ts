import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Recipe } from '../models/recipe.model';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private url = 'Recipe';
  recipeDeleted = new Subject<void>();

  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService,
    private router: Router
  ) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.baseApiUrl}/${this.url}`);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http
      .get<Recipe>(`${environment.baseApiUrl}/${this.url}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorHandlingService.handleError(error, this.router);
          return throwError(() => error);
        })
      );
  }

  deleteRecipe(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.baseApiUrl}/${this.url}/${id}`)
      .pipe(tap(() => this.recipeDeleted.next()))
      .pipe(
        catchError((error) => {
          this.errorHandlingService.handleError(error, this.router);
          return throwError(() => error);
        })
      );
  }
}
