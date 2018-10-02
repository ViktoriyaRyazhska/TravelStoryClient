import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'; import { HttpModule } from '@angular/http';

import {Observable} from 'rxjs';
import {LoginDTO} from './LoginDTO';
import {MyAuthService} from './my-auth.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: MyAuthService,
              private cookie: CookieService,
              private http: HttpClient) { }
  signIn(loginDTO: LoginDTO): Observable<any> {
    return this.auth.post('http://localhost:8080/api/login', loginDTO);
  }

  public getToken(): string {
    return localStorage.getItem('auth');
  }
}
