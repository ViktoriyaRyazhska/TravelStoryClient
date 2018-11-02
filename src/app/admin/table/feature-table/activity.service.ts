import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {ActivityCard} from './activityCard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080'})
};

@Injectable({
  providedIn: 'root',
})
export class ActivityService {

  private basicUrl = 'https://travelstory-server.herokuapp.com/admin/statistics';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getActivity(): Observable<ActivityCard> {
    return this.http.get<ActivityCard>(this.basicUrl.concat('/activity'));
  }
}

