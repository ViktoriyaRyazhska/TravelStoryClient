import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {TravelStory} from "../models/TravelStory";
import {Like} from "../models/Like";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class TravelStoryService {
  baseUrl = 'http://localhost:8080/api';
  private travelStoryUrl = 'travelStory';

  constructor(
    private http: HttpClient) {
  }

  getTravelStories(userOwnerId: number): Observable<TravelStory[]> {
    let params = new HttpParams();
    params.append('userOwnerId', userOwnerId.toString());
    return this.http.get<TravelStory[]>(`${this.baseUrl}/${this.travelStoryUrl}`, {params: params})
      .pipe(
        catchError(this.handleError('getTravelStories', []))
      );
  }

  /** POST: add a new travelStory to the server */
  addTravelStory(travelStory: TravelStory): Observable<TravelStory> {
    return this.http.post<TravelStory>(this.travelStoryUrl, TravelStory, httpOptions).pipe(
      catchError(this.handleError<TravelStory>('addTravelStory'))
    );
  }

  /** DELETE: delete the travelStory from the server */
  deleteTravelStory(travelStory: TravelStory |
    number): Observable<Like> {
    const id = typeof travelStory === 'number' ? travelStory : travelStory.id;
    const url = `${this.baseUrl}/${this.travelStoryUrl}/${id}`;

    return this.http.delete<TravelStory>(url, httpOptions).pipe(
      catchError(this.handleError<TravelStory>('deleteTravelStory'))
    );
  }

  /** PUT: update the hero on the server */
  updateTravelStory(travelStory: TravelStory): Observable<any> {
    return this.http.put(this.travelStoryUrl, travelStory, httpOptions).pipe(
      catchError(this.handleError<any>('updateTravelStory'))
    );
  }

  /**
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
