import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {TravelStoryCard} from './TravelStoryCard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class TravelStoryService {

  private basicUrl = 'http://localhost:8080/admin/statistic';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getTravelStoryCard(): Observable<TravelStoryCard> {
    return this.http.get<TravelStoryCard>(this.basicUrl.concat('s/travelStory'));
  }
}

