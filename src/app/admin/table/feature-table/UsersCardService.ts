import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {ActivityCard} from './activityCard';
import {UsersCard} from './usersCard';
import {DashCard} from './DashCard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': 'https://travelstory-client.herokuapp.com'})
};

@Injectable({
  providedIn: 'root',
})
export class UsersCardService {

  private basicUrl = 'https://travelstory-client.herokuapp.com/admin/statistics';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getBotCard(): Observable<UsersCard> {
    return this.http.get<UsersCard>(this.basicUrl.concat('/users'));
  }
}

