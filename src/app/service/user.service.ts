import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {User} from '../models/User';
import {UserDTO} from '../models/UserDTO';
import {PagableUserSearch} from '../models/PagableUserSearch';
import {BehaviorSubject} from 'rxjs';

const baseUrl = environment.apiUrl + '/api';
const options = {headers: {'Content-Type': 'application/json'}};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data: any;


  baseUrl = environment.apiUrl + '/api';

  private user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
  }

  public getUser(id: number): Observable<any> {
    return this.http.get<User>(baseUrl + '/user/' + id);
  }

  public updateSettings(dto: UserDTO): Observable<any> {
    return this.http.put(baseUrl + '/updateSettings', dto, options);
  }

  public searchUsers(term: string, page: number, size: number): Observable<PagableUserSearch> {
    if (!term.trim()) {
      return of();
    }
    this.data = this.http.get(`${this.baseUrl}/users/${term}/${page}/${size}`);
    return this.data;
  }

  public getFollowers(userId: number, page: number, size: number): Observable<PagableUserSearch> {
    this.data = this.http.get(`${this.baseUrl}/users/followers/${userId}/${page}/${size}`);
    return this.data;
  }

  public getFollowing(userId: number, page: number, size: number): Observable<PagableUserSearch> {
    this.data = this.http.get(`${this.baseUrl}/users/following/${userId}/${page}/${size}`);
    return this.data;
  }

  public setPreferedLang(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  public getPreferedLang(): string {
    return localStorage.getItem('lang');
  }

}
