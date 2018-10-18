import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../messenger/model/User';
import { Observable, of} from 'rxjs';
import {PagableUserSearch} from "../models/PagableUserSearch";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8080/api';
  private data: any;


  constructor(private httpClient: HttpClient) {
  }

  getUser(id: number): Observable<any> {
    debugger;
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
}
