import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hello } from '../model/hello-app';

@Injectable({ providedIn: 'root' })
export class HelloService {

  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/hello`;

  getHello(): Observable<Hello> {
    return this.http.get<Hello>(this.url);
  }
}
