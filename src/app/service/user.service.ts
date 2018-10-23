import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, of} from 'rxjs';
import {PagableUserSearch} from "../models/PagableUserSearch";

import {BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data: any;


  baseUrl = environment.apiUrl + '/api';

  private user = new BehaviorSubject<any>(null);

  public user$ = this.user.asObservable();


  constructor(private httpClient: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + '/user/' + id);
  }


  searchUsers(term: string, page: number, size: number): Observable<PagableUserSearch> {
    if (!term.trim()) {
      return of();
    }
    this.data = this.httpClient.get(`${this.baseUrl}/users/${term}/${page}/${size}`);
    return this.data;
  }

  getFollowers(userId:number,page: number, size: number): Observable<PagableUserSearch> {
    this.data = this.httpClient.get(`${this.baseUrl}/users/followers/${userId}/${page}/${size}`);
    return this.data;
  }

  getFollowing(userId:number,page: number, size: number): Observable<PagableUserSearch> {
    this.data = this.httpClient.get(`${this.baseUrl}/users/following/${userId}/${page}/${size}`);
    return this.data;
  }

  setPreferedLang(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  getPreferedLang(): string {
    return localStorage.getItem('lang');
  }

}
