import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hello } from '../model/hello-app';

@Injectable({ providedIn: 'root' })
export class HelloService {

  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/hello`;

  getHello(): Observable<Hello> {
    return this.http.get<Hello>(this.url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const message = error.status === 0
            ? 'Le serveur est indisponible.'
            : 'Impossible de charger le message.';

          return throwError(() => new Error(message));
        })
      );
  }
}
