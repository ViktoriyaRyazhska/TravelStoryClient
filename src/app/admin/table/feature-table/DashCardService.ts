import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {DashCard} from './DashCard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://travelstory-client.herokuapp.com'})
};

@Injectable({
  providedIn: 'root',
})
export class DashCardService {

  private basicUrl = 'https://travelstory-client.herokuapp.com/admin/statistics';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getDashCard(): Observable<DashCard> {
    return this.http.get<DashCard>(this.basicUrl.concat('/actual'));
  }

}

