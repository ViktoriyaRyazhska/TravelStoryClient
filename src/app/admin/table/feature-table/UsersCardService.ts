import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {UsersCard} from './usersCard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class UsersCardService {

  private basicUrl = 'https://travel-story-server.herokuapp.com/admin/statistics';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getBotCard(): Observable<UsersCard> {
    return this.http.get<UsersCard>(this.basicUrl.concat('/users'));
  }
}

