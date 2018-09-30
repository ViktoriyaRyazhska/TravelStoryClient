import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {Like} from "../models/Like";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class LikeService {
  private likesUrl = 'likes';

  constructor(
    private http: HttpClient) {
  }

  /** GET likes from the server */
  getLikes(travelStoryId: number, mediaId: number): Observable<Like[]> {
    return this.http.get<Like[]>(`${this.likesUrl}/${travelStoryId}/${mediaId}`)
      .pipe(
        catchError(this.handleError('getLikes', []))
      );
  }

  /** GET like by id. Will 404 if id not found */
  getLike(id: number): Observable<Like> {
    const url = `${this.likesUrl}/${id}`;
    return this.http.get<Like>(url).pipe(
      catchError(this.handleError<Like>(`getLike id=${id}`))
    );
  }

  /** POST: add a new like to the server */
  addLike(like: Like): Observable<Like> {
    return this.http.post<Like>(this.likesUrl, like, httpOptions).pipe(
      catchError(this.handleError<Like>('addLike'))
    );
  }

  /** DELETE: delete the like from the server */
  deleteLike(like: Like | number): Observable<Like> {
    const id = typeof like === 'number' ? like : like.id;
    const url = `${this.likesUrl}/${id}`;

    return this.http.delete<Like>(url, httpOptions).pipe(
      catchError(this.handleError<Like>('deleteLike'))
    );
  }

  /** PUT: update the like on the server */
  updateLike(like: Like): Observable<any> {
    return this.http.put(this.likesUrl, like, httpOptions).pipe(
      catchError(this.handleError<any>('updateLike'))
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
