import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + '/api';

  private user = new BehaviorSubject<any>(null);

  public user$ = this.user.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  getUser(id: number): Observable<any> {
    return this.httpClient.get<User>(this.baseUrl + '/user/' + id);
  }

  setPreferedLang(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  getPreferedLang(): string {
    return localStorage.getItem('lang');
  }

}
