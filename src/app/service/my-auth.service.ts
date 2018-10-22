import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MyAuthService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url, {withCredentials: true});
  }
  post(url: string, body: any) {
    return this.http.post(url, body, {withCredentials: true});
  }
}
