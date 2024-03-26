import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor() {}

  handleError(error: HttpErrorResponse, router: Router) {
    if (error.status === 404) {
      router.navigate(['/error/404']);
    } else {
      router.navigate(['/error']);
    }
  }
}
