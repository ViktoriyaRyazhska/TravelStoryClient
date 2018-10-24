import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {UserDTO} from '../models/UserDTO';

const baseUrl = environment.apiUrl + '/api';
const options = {headers: {'Content-Type': 'application/json'}};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUser(id: number): Observable<any> {
    return this.http.get<User>(baseUrl + '/user/' + id);
  }

  public updateSettings(dto: UserDTO): Observable<any> {
    return this.http.put(baseUrl + '/updateSettings', dto, options);
  }

  public setPreferedLang(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  public getPreferedLang(): string {
    return localStorage.getItem('lang');
  }

}
