import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {User} from '../models/User';
import {UserDTO} from '../models/UserDTO';

const baseUrl = environment.apiUrl + '/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<any> {
    return this.http.get<User>(baseUrl + '/user/' + id);
  }

  updateSettings(dto: UserDTO): Observable<any> {
    console.log(dto);
    return this.http.put(baseUrl + '/updateSettings', dto, {headers: {'Content-Type': 'application/json'}});
  }

  setPreferedLang(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  getPreferedLang(): string {
    return localStorage.getItem('lang');
  }

}
