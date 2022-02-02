import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HelloService {

  private url = 'http://localhost:8080/hello';

  constructor(private http: HttpClient) {
  }

  getHello(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
