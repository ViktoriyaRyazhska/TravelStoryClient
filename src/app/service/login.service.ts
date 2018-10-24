import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {Observable} from 'rxjs';
import {LoginDTO} from '../models/LoginDTO';
import {MyAuthService} from './my-auth.service';
import {CookieService} from 'ngx-cookie-service';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: MyAuthService,
              private cookie: CookieService,
              private http: HttpClient) {
  }

  signIn(loginDTO: LoginDTO): Observable<any> {
    return this.auth.post(environment.apiUrl + '/api/login', loginDTO);
  }

  public getToken(): string {
    return localStorage.getItem('auth');
  }
  public forgotPass( login : string): Observable<any>{
    return this.http.get<String>('http://localhost:8080/api/forgotPass/'+login);
  }
}
